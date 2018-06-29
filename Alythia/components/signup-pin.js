import React, { Component } from 'react';
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback, ImageBackground, TouchableOpacity, Image, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements';
import { store, setUserEmail, setUserPin, setUserUUID } from '../utils/secure-store';
import { createUser } from '../utils/routes';

class Signup extends Component {
  state = {
    pin: ''
  };

  handleSubmit = async () => {
    setUserPin(this.state.pin);
    const userStoredEmail = await store.getItemAsync('email');
    const userUUID = await store.getItemAsync('userUUID');
    createUser(userStoredEmail, userUUID);
    setTimeout(() => {
      this.props.navigation.navigate('AccountCreated');
    }, 500);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground source={require('../public/sign_up_bg.png')} style={styles.backgroundImage}>
          <View style={styles.mainContainer}>
            <Text h4 style={styles.header}>
              NEW PIN
            </Text>
            <View>
              <FormLabel style={{ marginTop: '15px' }}>6-Digit Pin</FormLabel>
              <FormInput
                placeholder="Please select a secure 6-digit pin..."
                value={this.state.pin}
                onChangeText={text => this.setState({ pin: text })}
                keyboardType="numeric"
                maxLength={6}
                secureTextEntry={true}
              />
            </View>
            <View>
              <TouchableOpacity onPress={this.handleSubmit}>
                <Image source={require('../public/buttons/create_pin.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <Button
                raised
                backgroundColor=""
                icon={{ name: 'md-arrow-round-back', type: 'ionicon' }}
                title="BACK TO LOG IN"
                onPress={() => this.props.navigation.navigate('Signup')}
              />
            </View>
            <View style={{ height: 80 }} />
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
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '500'
  }
});

export default Signup;
