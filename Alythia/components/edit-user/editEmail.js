import React, { Component } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ImageBackground
} from 'react-native';
import { Text } from 'react-native-elements';
import { setUserEmail, store } from '../../utils/secure-store';
import { styles } from '../../utils/styles';
import MyModal from './MyModal';
import axios from 'axios';

class EditEmail extends Component {
  state = {
    email: '',
    UUID: '',
    modalVisible: false,
    error: ''
  };

  async componentDidMount() {
    const userStoredEmail = await store.getItemAsync('email');
    const userUUID = await store.getItemAsync('userUUID');
    this.setState({ email: userStoredEmail, UUID: userUUID });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleSubmit = async () => {
    try {
      const oldEmail = await store.getItemAsync('email');

      // await axios.put('http://alythia.herokuapp.com/api/users/', {UUID: this.state.UUID, oldEmail, newEmail: this.state.email});
      await axios.put('http://10.0.1.15:8080/api/users/',
      {
        UUID: this.state.UUID,
        oldEmail: oldEmail,
        newEmail: this.state.email
      });

      console.log('UPDATED EMAIL\n');

      setUserEmail(this.state.email);
      this.setModalVisible(true);
      setTimeout(() => {
        this.props.navigation.navigate('UsersPage');
        this.setModalVisible(false);
      }, 2500);
    } catch (error) {
      this.setState({ error: error.message });
      setTimeout(() => { this.setState({ error: '' }) }, 5000)
    }
  };

  isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  render() {
    return (
      <TouchableWithoutFeedback>
        <ImageBackground source={require('../../public/background.png')} style={styles.backgroundImage}>
          <MyModal message={'Email Updated'} visible={this.state.modalVisible} />
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
            <View style={styles.mainContainer}>
              <View style={styles.header}>
                <Text h4 style={{ color: '#ecf0f1', fontWeight: '500' }}>
                  CHANGE YOUR EMAIL
                </Text>
                {
                  this.state.error
                    ? <Text h6 style={{ color: 'red', fontWeight: '500' }}>{this.state.error}</Text>
                    : ''
                }
              </View>
              <View style={styles.email}>
                <TextInput
                  autoFocus
                  style={styles.formInput}
                  selectionColor="#000000"
                  placeholder="Email"
                  textAlign={'center'}
                  value={this.state.email}
                  onChangeText={text => this.setState({ email: text })}
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.buttonArea}>
                {this.isEmail.test(this.state.email)
                  ?
                  (<TouchableOpacity onPress={this.handleSubmit}>
                    <Image source={require('../../public/buttons/email_button.png')} />
                  </TouchableOpacity>)
                  : (<Image source={require('../../public/buttons/email_button_disabled.png')} />)}

                <Button title="Back" onPress={() => this.props.navigation.navigate('UsersPage')} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

export default EditEmail;
