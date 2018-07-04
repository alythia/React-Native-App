import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Expo from "expo";
import handleBiometrics from "./biometrics";

// Creates encrypted SecureStore for mobile user
const store = Expo.SecureStore;

export default class Loading extends React.Component {
  state = {
    email: ""
  };

  componentDidMount = async () => {
    const userStoredEmail = await store.getItemAsync("email");
    const pin = await store.getItemAsync("pin");
    this.setState({ email: userStoredEmail });
    setTimeout(() => this.handleSignIn(), 2000);
  };

  handleSignIn = () => {
    if (this.state.email) {
      handleBiometrics(this.props.navigation.navigate);
    } else {
      this.props.navigation.navigate("Signup");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding} />
        <Image
          source={require("../public/Logo-funky.png")}
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
