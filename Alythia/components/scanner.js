import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BarCodeScanner, Permissions } from "expo";
import { transferData } from "../utils/routes";
import { store } from "../utils/secure-store";

export class Scanner extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false
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
        <BarCodeScanner
          onBarCodeRead={this._handleBarCodeRead}
          style={[StyleSheet.absoluteFill, styles.container]}
        >
          <View style={styles.layerTop}>
            <Button title="Back" style={{backgroundColor: '#eeeeee', padding: 10}} onPress={() => this.props.navigation.navigate('UsersPage')} />
          </View>
          <View style={styles.layerCenter}>
            <View style={styles.focused} />
          </View>
          <View style={styles.layerBottom} />
        </BarCodeScanner>
      );
    }
  }

  _handleBarCodeRead = async ({ type, data }) => {
    const userStoredEmail = await store.getItemAsync("email");
    const userUUID = await store.getItemAsync("userUUID");
    if (data) {
      if (!this.state.scanned) {
        transferData(data, userStoredEmail, userUUID);
      }
      this.setState({ scanned: true });
      
      setTimeout(() => {
        this.setState({ scanned: false });
      }, 7000)

      this.props.navigation.navigate("AuthorizingView");
    } else {
      console.error("QR scan unsuccessful, please try again.");
    }
  };
}

const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  layerCenter: {
    flex: 5
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity
  }
});

export default Scanner;
