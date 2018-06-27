import React, { Component } from 'react'

class Biometrics extends Component {
  componentDidMount = () => {
    setTimeout(() => this.handleBiometrics(), 3000)
  }

  handleBiometrics = async () => {
    try {
      const res = await Expo.Fingerprint.isEnrolledAsync()
      if (res === true) {
        const fingerPrint = await Expo.Fingerprint.authenticateAsync()
        if (fingerPrint.success) {
          this.props.navigation.navigate('Scanner')
        }
        // if (fingerPrint.error === 'user_fallback') {
        //   // this is where we need to ask user for PIN or Password
        // }
      }
    } catch (e) {
      console.log('error is: ', e)
    }
  }

  render() {
    return <div />
  }
}

export default Biometrics
