import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity
} from 'react-native';

import {
  responsiveWidth
} from "react-native-responsive-dimensions";

export default class BoletimScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>

            <View style={styles.container2}>
              <TouchableOpacity style={styles.buttonPaid}>
                <Text style={styles.texto}>PORTUGUES</Text>
                <Text style={styles.status}>></Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonPaid}>
                <Text style={styles.texto}>MATEMÁTICA</Text>
                <Text style={styles.status}>></Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonPaid}>
                <Text style={styles.texto}>CIÊNCIAS</Text>
                <Text style={styles.status}>></Text>
              </TouchableOpacity>
     
              <TouchableOpacity style={styles.buttonPaid}>
                <Text style={styles.texto}>HISTÓRIA</Text>
                <Text style={styles.status}>></Text>
              </TouchableOpacity>         
           
              <TouchableOpacity style={styles.buttonPaid}>
                <Text style={styles.texto}>GEOGRAFIA</Text>
                <Text style={styles.status}>></Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.buttonPaid}>
                <Text style={styles.texto}>ARTES</Text>
                <Text style={styles.status}>></Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.buttonPaid}>
                <Text style={styles.texto}>ED. FÍSICA</Text>
                <Text style={styles.status}>></Text>
              </TouchableOpacity>
              
            </View>
          </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#f0edf6' 
    },
    container2: {
      marginTop: 30 
    },
    month: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center'
    },
    buttonPaid: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      maxHeight: 50,
      height: 0,
      width: responsiveWidth(98),
      margin: 5,
      borderColor: 'black',
      borderRadius: 5,
      backgroundColor: '#336799',
      flexDirection: 'row'
    },
    texto: {
      textAlign: 'right',
      fontSize: 20,
      color: '#eee',
      marginLeft: 10,
      marginTop: 8,
    },
    status: {
      textAlign: 'left',
      fontSize: 25,
      color: '#eee',
      marginRight: 20,
      marginTop: 4,
      fontWeight: 'bold'
    },
    SubTitle: {
      fontSize: 24,
      //fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 25,
      color: '#003d6b'
    }
});