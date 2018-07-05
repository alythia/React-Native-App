import React, { Component } from "react";
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  Image,
  Button,
  TextInput
} from 'react-native';
import { Text } from 'react-native-elements';
import MyModal from './MyModal';
import { setUserPin } from '../../utils/secure-store';
import { styles } from '../../utils/styles';

class EditPin extends Component {
  constructor() {
    super();
    this.state = {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      pin5: "",
      pin6: "",
      created: false,
      modalVisible: false
    };
    this.inputField = {};
    this.mainInput = '';
  }

  handleSubmit = async () => {
    this.setModalVisible(true);
    const pinCode = Object.values(this.state); // get all values
    pinCode.pop(); // throw away created: false
    pinCode.pop();
    const pin = pinCode.join(""); // get values from pin1 to pin6
    setUserPin(pin);
    setTimeout(() => {
      this.props.navigation.navigate('UsersPage');
      this.setModalVisible(false);
    }, 3000);
  };

  handleFocus = () => {
    this.inputField.focus();
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleMainInput = text => {
    for (let i = 0; i < 6; i++) {
      if (text[i]) {
        this.setState({ ["pin" + (i + 1)]: text[i] });
      } else {
        this.setState({ ["pin" + (i + 1)]: "" });
      }
    }
    if (text.length === 6) {
      this.setState({ created: true });
      Keyboard.dismiss();
    }
  };

  render() {
    return (
      <ImageBackground source={require('../../public/background.png')} style={styles.backgroundImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.mainContainer}>
            <MyModal message={'Your Pin is Updated'} visible={this.state.modalVisible} />
            <View style={styles.header}>
              <Text h4 style={{ color: "#ecf0f1", fontWeight: "500" }}>
                NEW PIN
              </Text>
            </View>
            <View style={styles.pin}>
              <TextInput
                autoFocus
                keyboardType="numeric"
                maxLength={6}
                style={{ width: 0, height: 0 }}
                ref={r => (this.inputField = r)}
                onChangeText={text => this.handleMainInput(text)}
              />
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin1}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin2}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin3}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin4}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin5}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFocus}>
                <TextInput
                  style={styles.pinInput}
                  textAlign={'center'}
                  value={this.state.pin6}
                  maxLength={1}
                  secureTextEntry={true}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.buttonArea}>
              {this.state.created ? (
                <TouchableOpacity onPress={this.handleSubmit}>
                  <Image
                    source={require("../../public/buttons/create_pin.png")}
                  />
                </TouchableOpacity>
              ) : (
                <Image
                  source={require("../../public/buttons/create_pin_disabled.png")}
                />
              )}
              <Button
                title="Back"
                onPress={() => this.props.navigation.navigate("UsersPage")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

export default EditPin;
