import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner, Permissions } from 'expo'
import { transferData } from '../utils/routes'
import { store } from '../utils/secure-store'

export class Scanner extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  render() {
    const { hasCameraPermission } = this.state

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={this.styles.header}>Scan the Code!</View>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      )
    }
  }

  styles = {
    header: {
      //position: "reletive"
    },
  }

  _handleBarCodeRead = async ({ type, data }) => {
    const userStoredEmail = await store.getItemAsync('email')
    const userUUID = await store.getItemAsync('userUUID')
    if (data) {
      if (!this.state.scanned) {
        console.log(`This is the QR Code data: ${data}`)
        console.log(`This is user's email: ${userStoredEmail}`)
        console.log(`This is user's UUID: ${userUUID}`)
        transferData(data, userStoredEmail, userUUID)
      }
      this.setState({ scanned: true })

      this.props.navigation.navigate('AuthorizingView')
    } else {
      console.error('QR scan unsuccessful, please try again.')
    }
  }
}

export default Scanner
