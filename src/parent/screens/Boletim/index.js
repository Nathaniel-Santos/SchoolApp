import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth
} from "react-native-responsive-dimensions";

export default function BoletimScreen( {navigation} ) {

    const disciplinas = [
      {id: '1', nome: 'Português', 
        avaliacoes: {
          AV1: '8.0',
          AV2: '7.5',
          RE1S: '9.0',
        }
      },
      {id: '2', nome: 'Matemática', Nota: '7.5'},
      {id: '3', nome: 'Ciências', Nota: '6.0'},
      {id: '4', nome: 'História', Nota: '10.0'},
      {id: '5', nome: 'Geografia', Nota: '7.0'},
      {id: '6', nome: 'Artes', Nota: '9.0'},
      {id: '7', nome: 'Ed. Física', Nota: '10.0'},
    ] 
    
    function Disciplina({NomeDisciplina, Avaliacoes}){    

      return(
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=> navigation.navigate('BoletimDetail', {NomeDisciplina, Avaliacoes})}
            >
                <Text style={styles.texto}>{NomeDisciplina}</Text>
            </TouchableOpacity>
        </View>
      );
    }
    
    return (
      
      
      <View>
            <FlatList 
            keyExtractor={disciplinas.id}
            data={disciplinas}
            renderItem={ ({item}) => <Disciplina NomeDisciplina={item.nome} Avaliacoes={item.id}/> }
            />
        </View>
          
          );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 1
    },
    button: {
      
      justifyContent: 'space-between',
      alignItems: 'center',
      //maxHeight: 50,
      height: responsiveScreenHeight(6),
      width: responsiveScreenWidth(95),
      margin: 5,
      borderColor: 'black',
      borderRadius: 5,
      backgroundColor: '#336799',
      flexDirection: 'row'
    },
    texto: {
      textAlign: 'right',
      fontSize: responsiveFontSize(2.1),
      color: '#eee',
      marginLeft: 10,
      //marginTop: 8,
      
    },
    SubTitle: {
      fontSize: 24,
      //fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 25,
      color: '#003d6b'
    }
});