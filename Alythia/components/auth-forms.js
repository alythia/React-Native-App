import React, {Component} from 'react'
import {View} from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from 'react-native-elements'
import {
  setUserEmail,
  setUserPin,
  retrieveUserEmail,
  retrieveAndValidateUserPin
} from './utils/secure-store'

export class AuthForm extends Component {
  state = {
    signUpView: false,
    email: '',
    pin: ''
  }

  componentDidMount = () => {
    // SET STATE BASED ON WHETHER LOG IN OR SIGN UP VIEW
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = () => {
    if (this.state.signUpView) {
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
      <View onSubmit={this.handleSubmit}>
        <View>
          <Text h1>{this.state.signUpView ? 'LOG IN' : 'SIGN UP'}</Text>
        </View>
        <View>
          <FormLabel>Email</FormLabel>
          <FormInput
            name="email"
            value={this.state.email}
            onChangeText={this.handleChange}
          />
          <FormValidationMessage>
            {'This field is required'}
          </FormValidationMessage>
        </View>
        <View>
          <FormLabel>6-Digit Pin</FormLabel>
          <FormInput
            name="pin"
            value={this.state.email}
            onChangeText={this.handleChange}
          />
          <FormValidationMessage>
            {'This field is required'}
          </FormValidationMessage>
        </View>
        <View>
          <Button
            large
            raised
            icon={{name: 'user-check', type: 'feather'}}
            title="SUBMIT"
          />
        </View>
        {this.state.signUpView ? (
          <View>
            <Button
              small
              raised
              icon={{name: 'ios-backspace', type: 'ionicon'}}
              title="BACK TO LOG IN"
              onClick={this.setState({signUpView: false})}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
    )
  }
}

export default AuthForm
