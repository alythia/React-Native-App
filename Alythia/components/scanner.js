import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarCodeScanner, Permissions } from "expo";
import { initiateDataTransfer } from "../utils/routes";
import Expo from "expo";

// Creates encrypted SecureStore for mobile user
const store = Expo.SecureStore;

export class Scanner extends Component {
  state = {
    hasCameraPermission: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={this.styles.header}>Scan the Code!</View>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  styles = {
    header: {
      //position: "reletive"
    }
  };

  _handleBarCodeRead = async ({ type, data }) => {
    const userStoredEmail = await store.getItemAsync("email");
    if (data) {
      console.log(`This is the QR Code data: ${data}`);
      console.log(`This is user's email: ${userStoredEmail}`);
      initiateDataTransfer(data, userStoredEmail);
      this.props.navigation.navigate("AccountCreated");
    } else {
      console.error("QR scan unsuccessful, please try again.");
    }
  };
}

export default Scanner;
