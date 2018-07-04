import React, { Component } from 'react';
import { View, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '../utils/styles';
import { retrieveAndValidateUserPin } from '../utils/secure-store';

class UserLogin extends Component {
  state = {
    notification: '',
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: ''
  };

  mainInput = '';
  reference = {};

  handleSubmit = async () => {
    const pinCode = Object.values(this.state).join('');
    const successfulSignIn = await retrieveAndValidateUserPin(pinCode);
    if (successfulSignIn) {
      this.props.navigation.navigate('Scanner');
    } else {
      this.setState({ notification: 'Invalid Passcode' });
      setTimeout(() => {
        this.setState({ notification: '' });
      }, 5000);
      this.mainInput = '';
      this.reference['mainInput'].focus();
    }
  };

  handleFocus = () => {
    this.reference['mainInput'].focus();
  };

  handleMainInput = text => {
    console.log('You typed', text);
    for (let i = 0; i < 6; i++) {
      if (text[i]) {
        this.setState({ ['pin' + (i + 1)]: text[i] });
      } else {
        this.setState({ ['pin' + (i + 1)]: '' });
      }
    }
    if (text.length === 6) {
      Keyboard.dismiss();
      setTimeout(() => this.handleSubmit(), 200);
    }
  };

  render() {
    return (
      <ImageBackground source={require('../public/background.png')} style={styles.backgroundImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.mainContainer}>
            <View style={styles.header}>
              <Text h4 style={{ color: '#ecf0f1', fontWeight: '500' }}>
                ENTER YOUR PIN
              </Text>
              {this.state.notification.length ? (
                <Text h6 style={{ color: 'red', fontWeight: '100' }}>
                  {this.state.notification}
                </Text>
              ) : (
                <Text />
              )}
            </View>
            <View style={styles.pin}>
              <TextInput
                autoFocus
                keyboardType="numeric"
                maxLength={6}
                style={{ width: 0, height: 0, backgroundColor: '#000000' }}
                onChangeText={text => this.handleMainInput(text)}
                ref={input => (this.reference['mainInput'] = input)}
              />
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin1}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin2}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin3}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin4}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin5}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin6}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.buttonArea} />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

export default UserLogin;
