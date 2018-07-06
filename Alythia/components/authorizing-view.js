/*eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";

export default class AuthorizingView extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("AuthSuccess");
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding} />
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ height: 20 }} />
        <Text h4 style={styles.success}>
          Authorizing your information...
        </Text>
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
  success: {
    color: "white"
  },
  padding: {
    flex: 4
  }
});
