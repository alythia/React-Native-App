import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { deleteUser, store } from '../utils/secure-store';

class UsersPage extends React.Component {
  constructor(){
    super();
    this.state = {
      currentEmail: ''
    }
  }
  async componentDidMount(){
    const userStoredEmail = await store.getItemAsync('email');
    this.setState({
      currentEmail: userStoredEmail
    })
  }

  handleChangePin = () => {
    this.props.navigation.navigate("EditPin");
  };

  handleChangeEmail = () => {
    this.props.navigation.navigate("EditEmail");
  };

  handleDeleteAccount = () => {
    deleteUser();
    this.props.navigation.navigate('Signup');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground source={require('../public/background.png')} style={styles.backgroundImage}>
          <View style={styles.headerArea}>
            <Image source={require('../public/user.png')} />
            <Text style={{color: '#ffffff', fontSize: 16, paddingTop: 10, textAlign: 'center'}}>
            {this.state.currentEmail}
            </Text>
          </View>
          <View style={styles.mainArea}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Scanner")}
            >
              <Image
                style={styles.img}
                source={require("../public/buttons/scanner_button.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleChangeEmail}>
              <Image
                style={styles.img}
                source={require("../public/buttons/change_email.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleChangePin}>
              <Image
                style={styles.img}
                source={require("../public/buttons/change_pin.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity onPress={this.handleDeleteAccount}>
              <Image source={require("../public/buttons/delete_account.png")} />
            </TouchableOpacity>{" "}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center"
  },
  headerArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainArea: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    marginTop: 5
  },
  bottom: {
    flex: 2,
    alignItems: "center"
  }
});

export default UsersPage;
