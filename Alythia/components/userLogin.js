import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput
} from "react-native";
import { Text } from "react-native-elements";

import { retrieveAndValidateUserPin } from "../utils/secure-store";

class UserLogin extends Component {
  state = {
    notification: "",
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: ""
  };

  mainInput = "";
  reference = {};

  handleSubmit = async () => {
    const pinCode = Object.values(this.state).join("");
    const successfulSignIn = await retrieveAndValidateUserPin(pinCode);
    if (successfulSignIn) {
      this.props.navigation.navigate("Scanner");
    } else {
      this.setState({ notification: "Invalid Passcode" });
      setTimeout(() => {
        this.setState({ notification: "" });
      }, 5000);
      this.mainInput = "";
      this.reference["mainInput"].focus();
    }
  };

  handleMainInput = text => {
    for (let i = 0; i < 6; i++) {
      if (text[i]) {
        this.setState({ ["pin" + (i + 1)]: text[i] });
      } else {
        this.setState({ ["pin" + (i + 1)]: "" });
      }
    }
    if (text.length === 6) {
      Keyboard.dismiss();
      setTimeout(() => this.handleSubmit(), 200);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground
          source={require("../public/sign_up_bg.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.mainContainer}>
            <View style={styles.header}>
              <Text h4 style={{ color: "#ecf0f1", fontWeight: "500" }}>
                ENTER YOUR PIN
              </Text>
              {this.state.notification.length ? (
                <Text h6 style={{ color: "red", fontWeight: "100" }}>
                  {this.state.notification}
                </Text>
              ) : (
                <Text />
              )}
            </View>
            <View style={styles.pin}>
              <TextInput
                autoFocus
                keyboardType="numeric"
                maxLength={6}
                style={{ width: 0, height: 0 }}
                onChangeText={text => this.handleMainInput(text)}
                ref={input => (this.reference["mainInput"] = input)}
              />
              <TextInput
                style={styles.formInput}
                textAlign={"center"}
                value={this.state.pin1}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={"center"}
                value={this.state.pin2}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={"center"}
                value={this.state.pin3}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={"center"}
                value={this.state.pin4}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={"center"}
                value={this.state.pin5}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
              <TextInput
                style={styles.formInput}
                textAlign={"center"}
                value={this.state.pin6}
                maxLength={1}
                secureTextEntry={true}
                editable={false}
              />
            </View>

            <View style={styles.buttonArea} />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  pin: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  formInput: {
    color: "#ecf0f1",
    fontSize: 20,
    height: 50,
    width: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    margin: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10
  },
  buttonArea: {
    flex: 2,
    alignItems: "center"
  }
});

export default UserLogin;
