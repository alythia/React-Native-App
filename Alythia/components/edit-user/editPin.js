import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  Image,
  Button,
  TextInput
} from 'react-native';
import { Text } from 'react-native-elements';
import MyModal from './MyModal';
import { setUserPin } from '../../utils/secure-store';

class EditPin extends Component {
  constructor() {
    super();
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
      created: false,
      modalVisible: false
    };

    this.mainInput = '';
  }

  handleSubmit = async () => {
    this.setModalVisible(true);
    const pinCode = Object.values(this.state); // get all values
    pinCode.pop(); // throw away created: false
    pinCode.pop();
    const pin = pinCode.join(''); // get values from pin1 to pin6
    console.log('this is your pin', pin);
    setUserPin(pin);
    setTimeout(() => {
      this.props.navigation.navigate('UsersPage');
      this.setModalVisible(false)
    }, 3000)
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleMainInput = text => {
    console.log(this.mainInput);
    for (let i = 0; i < 6; i++) {
      if (text[i]) {
        this.setState({ ['pin' + (i + 1)]: text[i] });
      } else {
        this.setState({ ['pin' + (i + 1)]: '' });
      }
    }
    if (text.length === 6) {
      this.setState({ created: true });
      Keyboard.dismiss();
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground source={require('../../public/sign_up_bg.png')} style={styles.backgroundImage}>
          <View style={styles.mainContainer}>
            <MyModal message={'You Pin is Updated'} visible={this.state.modalVisible}/>
            <View style={styles.header}>
              <Text h4 style={{ color: '#ecf0f1', fontWeight: '500' }}>
                NEW PIN
              </Text>
            </View>
            <View style={styles.pin}>
              <TextInput
                autoFocus
                keyboardType="numeric"
                maxLength={6}
                style={{ width: 0, height: 0 }}
                onChangeText={text => this.handleMainInput(text)}
              />
              <TextInput
                style={styles.formInput}
                textAlign={'center'}
                value={this.state.pin1}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={'center'}
                value={this.state.pin2}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={'center'}
                value={this.state.pin3}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={'center'}
                value={this.state.pin4}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={'center'}
                value={this.state.pin5}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={'center'}
                value={this.state.pin6}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
            </View>

            <View style={styles.buttonArea}>
              {this.state.created ? (
                <TouchableOpacity onPress={this.handleSubmit}>
                  <Image source={require('../../public/buttons/create_pin.png')} />
                </TouchableOpacity>
              ) : (
                <Image source={require('../../public/buttons/create_pin_disabled.png')} />
              )}
              <Button title="Back" onPress={() => this.props.navigation.navigate('UsersPage')} />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pin: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInput: {
    color: '#ecf0f1',
    fontSize: 20,
    height: 50,
    width: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    margin: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10
  },
  buttonArea: {
    flex: 2,
    alignItems: 'center'
  },
  backButton: {
    justifyContent: 'flex-start'
  }
});

export default EditPin;
