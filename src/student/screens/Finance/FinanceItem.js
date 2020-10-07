import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';


export default function Inicio(){

  isOpen = () => {}

  isClose = () => {}

  return(
      <View style={Styles.container}>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>Matéria</Text>
        </View>
        <View>
          <Text>Nota</Text>
          <Text>Faltas</Text>
        </View>
      </View>
  );
}

Styles = StyleSheet.create({
  container: {
    flex: 1
  }
});