import React, { Component } from "react";
import { View } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Text
} from "react-native-elements";

import {
  retrieveUserEmail,
  retrieveAndValidateUserPin
} from "../utils/secure-store";

export class Login extends Component {
  state = {
    email: "",
    pin: ""
  };

  handleSubmit = () => {
    const userEmail = retrieveUserEmail();
    const successfulSignIn = retrieveAndValidateUserPin();
    console.log(`User email: ${userEmail}`, `Success? ${successfulSignIn}`);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <View>
          <Text
            h2
            style={{
              textAlign: "center",
              color: "#061A40",
              fontWeight: "bold"
            }}
          >
            LOG IN
          </Text>
        </View>
        <View style={{ height: 20 }} />
        <View>
          <FormLabel style={{ marginTop: "15px" }}>Email</FormLabel>
          <FormInput
            placeholder="Please enter your email..."
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            keyboardType="email-address"
          />
          <FormValidationMessage>This field is required</FormValidationMessage>
        </View>
        <View style={{ height: 20 }} />
        <View>
          <FormLabel style={{ marginTop: "15px" }}>6-Digit Pin</FormLabel>
          <FormInput
            placeholder="Please input your 6-digit pin..."
            value={this.state.pin}
            onChangeText={text => this.setState({ pin: text })}
            keyboardType="numeric"
            maxLength={6}
            secureTextEntry={true}
          />
          <FormValidationMessage>This field is required</FormValidationMessage>
        </View>
        <View style={{ height: 50 }} />
        <View>
          <Button
            raised
            icon={{ name: "check" }}
            backgroundColor="#061A40"
            title="LOG IN"
            onPress={this.handleSubmit}
          />
        </View>
        <View style={{ height: 10 }} />
        <View>
          <Button
            raised
            backgroundColor="#006DB6"
            icon={{ name: "add-user", type: "entypo" }}
            title="OR CREATE ACCOUNT"
            onPress={() => this.props.navigation.navigate("Signup")}
          />
        </View>
        <View style={{ height: 80 }} />
      </View>
    );
  }
}

export default Login;
