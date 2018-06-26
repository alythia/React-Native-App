import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  componentDidMount = () => {
    setTimeout(() => this.handleBiometrics(), 3000);
  };

  handleBiometrics = async () => {
    try {
      const res = await Expo.Fingerprint.isEnrolledAsync();
      if (res === true) {
        const fingerPrint = await Expo.Fingerprint.authenticateAsync();
        console.log(fingerPrint);
        // if (fingerPrint.error === 'user_fallback') {
        //   // this is where we need to ask user for PIN or Password
        // }
      }
    } catch (e) {
      console.log("error is: ", e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding} />
        <Image
          source={require("./public/Logo-funky.png")}
          style={styles.image}
        />
        <View style={styles.padding} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#061A40",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    maxWidth: 300
  },
  padding: {
    flex: 4
  }
});
