import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Inicio'
    };

    render() {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#003d6b" barStyle="light-content" />
        
            <View style={styles.container1}>
              <TouchableOpacity 
                style={styles.botao}
                onPress={()=>this.props.navigation.navigate('Boletim')}>
                <Image style={{width: 55, height: 55}} source={require('../../../img/notes.png')} />
                <Text style={styles.texto}>BOLETIM</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao}
              onPress={()=>this.props.navigation.navigate('Finance')}>
                <Image style={{width: 55, height: 55}} source={require('../../../img/finance.png')} />
                <Text style={styles.texto}>FINANCEIRO</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity style={styles.botao}>
                <Image style={{width: 55, height: 55}} source={require('../../../img/warn.png')} />
                <Text style={styles.texto}>OCORRÊNCIAS</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botao}>
                <Image style={{width: 55, height: 55}} source={require('../../../img/chat.png')} />
                <Text style={styles.texto}>CHAT</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff' //'#f0edf6' 
    },
    container1:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 60,
      marginBottom: 15
    },
    container2:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: -100,
      marginBottom: 50
    },
    texto: {
      opacity: 0.8,
      fontWeight: 'bold',
      fontSize: 14,
      color: '#f0edf6',
    },
    botao: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      height: 110,
      width: 120,
      margin: 10,
      borderColor: 'black',
      borderRadius: 10,
      backgroundColor: '#336799',
      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
});