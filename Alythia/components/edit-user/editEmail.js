import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  Modal
} from 'react-native';
import { Text } from 'react-native-elements';
import { setUserEmail } from '../../utils/secure-store';
import { LinearGradient } from 'expo';
const store = Expo.SecureStore;

class EditEmail extends Component {
  state = {
    email: '',
    modalVisible: false
  };

  async componentDidMount() {
    const userStoredEmail = await store.getItemAsync('email');
    this.setState({ email: userStoredEmail });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleSubmit = async () => {
    setUserEmail(this.state.email);
    this.setModalVisible(true);
    setTimeout(() => {
      this.props.navigation.navigate('UsersPage');
      this.setModalVisible(false);
    }, 3000);
  };

  isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        <LinearGradient colors={['rgba(0,55,84,0.54)', 'rgba(16,66,95, 1)']} style={styles.background}>
          <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
            <View style={styles.header}>
              <View>
                <Text h1>Email Updated</Text>
              </View>
            </View>
          </Modal>
          <View style={styles.mainContainer}>
            <View style={styles.header}>
              <Text h4 style={{ color: '#ecf0f1', fontWeight: '500' }}>
                CHANGE YOUR EMAIL
              </Text>
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
              {this.isEmail.test(this.state.email) ? (
                <TouchableOpacity onPress={this.handleSubmit}>
                  <Image source={require('../../public/buttons/email_button.png')} />
                </TouchableOpacity>
              ) : (
                <Image source={require('../../public/buttons/email_button_disabled.png')} />
              )}
              <Button title="Back" onPress={() => this.props.navigation.navigate('UsersPage')} />
            </View>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  email: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInput: {
    color: '#ecf0f1',
    fontSize: 20,
    height: 50,
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    margin: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 100
  },
  buttonArea: {
    flex: 2,
    alignItems: 'center'
  }
});

export default EditEmail;
