import React, { Component } from 'react'
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Text,
} from 'react-native-elements'
import {
  store,
  setUserEmail,
  setUserPin,
  setUserUUID,
} from '../utils/secure-store'
import { createUser } from '../utils/routes'

class Signup extends Component {
  state = {
    email: '',
    pin: '',
  }

  handleSubmit = async () => {
    setUserEmail(this.state.email)
    setUserPin(this.state.pin)
    setUserUUID()
    const userStoredEmail = await store.getItemAsync('email')
    const userUUID = await store.getItemAsync('userUUID')
    createUser(userStoredEmail, userUUID)
    setTimeout(() => {
      this.props.navigation.navigate('AccountCreated')
    }, 500)
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View>
            <Text
              h2
              style={{
                textAlign: 'center',
                color: '#061A40',
                fontWeight: 'bold',
              }}>
              SIGN UP
            </Text>
          </View>
          <View style={{ height: 20 }} />
          <View>
            <FormLabel style={{ marginTop: '15px' }}>Email</FormLabel>
            <FormInput
              placeholder="Please enter your email..."
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              keyboardType="email-address"
            />
            <FormValidationMessage>
              This field is required
            </FormValidationMessage>
          </View>
          <View style={{ height: 20 }} />
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
            <FormValidationMessage>
              This field is required
            </FormValidationMessage>
          </View>
          <View style={{ height: 50 }} />
          <View>
            <Button
              raised
              icon={{ name: 'check' }}
              backgroundColor="#061A40"
              title="CREATE MY ACCOUNT"
              onPress={this.handleSubmit}
            />
          </View>
          <View style={{ height: 10 }} />
          <View>
            <Text
              raised
              backgroundColor=""
              icon={{ name: 'md-arrow-round-back', type: 'ionicon' }}
              title="BACK TO LOG IN"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
          <View style={{ height: 80 }} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default Signup
