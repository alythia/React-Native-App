import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
  Image
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';
import { store, setUserEmail, setUserPin, setUserUUID } from '../utils/secure-store';
import { createUser } from '../utils/routes';

class Signup extends Component {
  state = {
    pin: ''
  };

  handleSubmit = async () => {
    setUserPin(this.state.pin);
    setUserUUID();
    setTimeout(() => {
      this.props.navigation.navigate('Signup_pin');
    }, 500);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground source={require('../public/sign_up_bg.png')} style={styles.backgroundImage}>
          <View style={styles.mainContainer}>
            <View style={styles.header}>
              <Text h4 style={{ color: '#ecf0f1', fontWeight: '500' }}>
                WELCOME
              </Text>
            </View>
            <View style={styles.email}>
              <TextInput
                autoFocus
                style={styles.formInput}
                placeholder="Email"
                textAlign={'center'}
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.buttonArea}>
              <TouchableOpacity onPress={this.handleSubmit}>
                <Image source={require('../public/buttons/email_button.png')} />
              </TouchableOpacity>
              <Button
                backgroundColor=""
                icon={{ name: 'md-arrow-round-back', type: 'ionicon' }}
                title="BACK TO LOG IN"
                onPress={() => this.props.navigation.navigate('Login')}
              />
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
  email: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInput: {
    color: '#ecf0f1',
    fontSize: 20,
    height: 40,
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.1)',
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

export default Signup;
