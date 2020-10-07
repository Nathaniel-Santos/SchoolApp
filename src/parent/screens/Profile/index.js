import React, {Component} from 'react';

import {
    StyleSheet, 
    View, 
    Text
  } from 'react-native';
  
 export default class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>USUARIO</Text>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0edf6' 
    }
});