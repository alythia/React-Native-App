import React, {Component} from 'react'
import {View} from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Text
} from 'react-native-elements'
import {
  setUserEmail,
  setUserPin,
  retrieveUserEmail,
  retrieveAndValidateUserPin
} from '../utils/secure-store'

export class AuthForm extends Component {
  state = {
    logInView: true,
    email: '',
    pin: ''
  }

  handleSubmit = () => {
    if (!this.state.logInView) {
      setUserEmail(this.state.email)
      setUserPin(this.state.pin)
    } else {
      const userEmail = retrieveUserEmail()
      const successfulSignIn = retrieveAndValidateUserPin()
      console.log(`User email: ${userEmail}`, `Success? ${successfulSignIn}`)
    }
  }

  render() {
    return (
      <View
        onSubmitEditing={this.handleSubmit}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <View>
          <Text
            h3
            style={{textAlign: 'center', color: '#061A40', fontWeight: 'bold'}}
          >
            {this.state.logInView ? 'LOG IN' : 'SIGN UP'}
          </Text>
        </View>
        <View style={{height: 20}} />
        <View>
          <FormLabel style={{marginTop: '15px'}}>Email</FormLabel>
          <FormInput
            placeholder="Please enter your email..."
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          <FormValidationMessage>
            {'This field is required'}
          </FormValidationMessage>
        </View>
        <View style={{height: 20}} />
        <View>
          <FormLabel style={{marginTop: '15px'}}>6-Digit Pin</FormLabel>
          <FormInput
            placeholder="Please select a secure 6-digit pin..."
            value={this.state.pin}
            onChangeText={text => this.setState({pin: text})}
          />
          <FormValidationMessage>
            {'This field is required'}
          </FormValidationMessage>
        </View>
        <View style={{height: 40}} />
        <View>
          <Button
            raised
            icon={{name: 'check'}}
            backgroundColor="#061A40"
            title="LOG IN"
          />
        </View>
        <View style={{height: 10}} />
        {this.state.logInView ? (
          <View>
            <Button
              raised
              backgroundColor="#006DB6"
              icon={{name: 'add-user', type: 'entypo'}}
              title="OR CREATE AN ACCOUNT"
              onClick={() => this.setState({logInView: false})}
            />
          </View>
        ) : (
          <View />
        )}
        <View style={{height: 80}} />
      </View>
    )
  }
}

export default AuthForm
