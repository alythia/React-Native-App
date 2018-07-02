import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

class UsersPage extends React.Component {
  handleChangePin = () => {
    console.log('changing pin');
  };

  handleChangeEmail = () => {
    console.log('changin email');
    this.props.navigation.navigate('EditEmail');
  };

  handleDeleteAccount = () => {
    console.log('deleting account');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <LinearGradient colors={['rgba(0,55,84,0.54)', 'rgba(16,66,95, 1)']} style={styles.background}>
          <View style={styles.headerArea}>
            <Text h4 style={{ color: '#ecf0f1', fontWeight: '500' }}>
              USERS PAGE
            </Text>
          </View>
          <View style={styles.mainArea}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Scanner')}>
              <Image style={styles.img} source={require('../public/buttons/scanner_button.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleChangeEmail}>
              <Image style={styles.img} source={require('../public/buttons/change_email.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleChangePin}>
              <Image style={styles.img} source={require('../public/buttons/change_pin.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity onPress={this.handleDeleteAccount}>
              <Image source={require('../public/buttons/delete_account.png')} />
            </TouchableOpacity>{' '}
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  headerArea: {
    flex: 1,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  mainArea: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    marginTop: 5
  },
  bottom: {
    flex: 2,
    alignItems: 'center'
  }
});

export default UsersPage;
