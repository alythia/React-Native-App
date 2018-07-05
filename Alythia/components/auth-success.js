/*eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-elements";

export default class AuthSuccess extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Scanner");
    }, 5000);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.padding} />
        <Icon name="check" type="evilicon" color="white" size={200} />
        <Text style={{ height: 20 }} />
        <Text h4 style={styles.success}>
          Authorization Successful!
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
