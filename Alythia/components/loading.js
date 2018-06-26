import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Loading extends React.Component {
  componentDidMount = () => {
    setTimeout(() => this.handleSignIn(), 3000);
  };

  handleSignIn = () => {};

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
