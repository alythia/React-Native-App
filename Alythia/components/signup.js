import React, { Component } from 'react'
import { View } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Text,
} from 'react-native-elements'

import { setUserEmail, setUserPin } from '../utils/secure-store'

export class Signup extends Component {
  state = {
    email: '',
    pin: '',
  }

  handleSubmit = () => {
    setUserEmail(this.state.email)
    setUserPin(this.state.pin)
  }

  render() {
    return (
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
          />
          <FormValidationMessage>This field is required</FormValidationMessage>
        </View>
        <View style={{ height: 20 }} />
        <View>
          <FormLabel style={{ marginTop: '15px' }}>6-Digit Pin</FormLabel>
          <FormInput
            placeholder="Please select a secure 6-digit pin..."
            value={this.state.pin}
            onChangeText={text => this.setState({ pin: text })}
          />
          <FormValidationMessage>This field is required</FormValidationMessage>
        </View>
        <View style={{ height: 50 }} />
        <View>
          <Button
            raised
            icon={{ name: 'check' }}
            backgroundColor="#061A40"
            title="CREATE ACCONT"
            onPress={this.handleSubmit}
          />
        </View>
        <View style={{ height: 10 }} />
        <View>
          <Button
            raised
            backgroundColor="#006DB6"
            icon={{ name: 'md-arrow-round-back', type: 'ionicon' }}
            title="OR GO BACK TO LOG IN"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
        <View style={{ height: 80 }} />
      </View>
    )
  }
}

export default Signup
