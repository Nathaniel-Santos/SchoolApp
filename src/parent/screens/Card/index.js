import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class CardScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>MAIS INFORMAÇÕES</Text>
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