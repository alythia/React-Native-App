import React, { Component } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

export default class MyModal extends Component {
  render() {
    const { message, visible } = this.props;
    return (
      <Modal animationType="slide" transparent={false} visible={visible}>
        <View style={styles.header}>
          <View>
            <Text h2 style={{color: '#ffffff'}}>{message}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006DB6'
  }
});
