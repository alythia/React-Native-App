import React, { Component } from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image
} from 'react-native';
import { Text } from 'react-native-elements';
import { setUserEmail, setUserUUID } from '../utils/secure-store';
import { styles } from '../utils/styles';

class Signup extends Component {
  state = {
    email: '',
    error: ''
  };

  handleSubmit = async () => {
    try {
      await setUserEmail(this.state.email);
      await setUserUUID();
      this.props.navigation.navigate('Signup_pin');
    } catch (error) {
      this.setState({ error: 'Somethig Went Wrong' })
    }

  };

  isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  render() {
    return (
      <ImageBackground source={require('../public/background.png')} style={styles.backgroundImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.mainContainer}>
            <View style={styles.header}>
              <Text h4 style={{ color: '#ecf0f1', fontWeight: '500' }}>
                WELCOME
              </Text>
              {
                this.state.error.length
                  ? <Text h4 style={{ color: '#ecf0f1', fontWeight: '500' }}>
                      WELCOME
                    </Text>
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
              {this.isEmail.test(this.state.email) && !this.state.error ? (
                <TouchableOpacity onPress={this.handleSubmit}>
                  <Image source={require('../public/buttons/email_button.png')} />
                </TouchableOpacity>
              ) : (
                  <Image source={require('../public/buttons/email_button_disabled.png')} />
                )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

export default Signup;
