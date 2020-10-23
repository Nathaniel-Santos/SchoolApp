import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'

import {
    responsiveFontSize,
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth
  } from "react-native-responsive-dimensions";

export default function BoletimScreen( {navigation} ){

    const disciplinas = [
        {id: '1', nome: 'Português', Nota: '7.5'},
        {id: '2', nome: 'Matemática', Nota: '7.5'},
        {id: '3', nome: 'Ciências', Nota: '6.0'},
        {id: '4', nome: 'História', Nota: '10.0'},
        {id: '5', nome: 'Geografia', Nota: '7.0'},
        {id: '6', nome: 'Artes', Nota: '9.0'},
        {id: '7', nome: 'Ed. Física', Nota: '10.0'},
      ] 

    const avaliacoes = [
      {id: 'AV1', nota: '7.5', Português: '7.5', Matemática: '5.0', Ciências: '8.0'},
      {id: 'AV2', nota: '6.0'},
      {id: 'RE1S', nota: ' '},
      {id: 'MD1S', nota: '6.75'},
      {id: 'AV3', nota: '9.0'},
      {id: 'AV4', nota: '8.0'},
      {id: 'RE2S', nota: ' '},
      {id: 'MD2S', nota: '8.5'},
      {id: 'MDF', nota: '7.6'},
    ]

    const AV1 = [
        {id: '1', nome: 'Português', Nota: '7.5'},
        {id: '2', nome: 'Matemática', Nota: '7.5'},
        {id: '3', nome: 'Ciências', Nota: '6.0'},
        {id: '4', nome: 'História', Nota: '10.0'},
        {id: '5', nome: 'Geografia', Nota: '7.0'},
        {id: '6', nome: 'Artes', Nota: '9.0'},
        {id: '7', nome: 'Ed. Física', Nota: '10.0'}
    ]

    const AV2 = [
        {id: '1', nome: 'Português', Nota: '8.0'},
        {id: '2', nome: 'Matemática', Nota: '10.0'},
        {id: '3', nome: 'Ciências', Nota: '7.5'},
        {id: '4', nome: 'História', Nota: '8.0'},
        {id: '5', nome: 'Geografia', Nota: '6.5'},
        {id: '6', nome: 'Artes', Nota: '10.0'},
        {id: '7', nome: 'Ed. Física', Nota: '10.0'}
    ]

    function pressAV1( {avaliacao} ){
        <View style={styles.containerNotas}>
            <View style={styles.dadosNotas}>
                <Text style={styles.notaText}>{nome}</Text>
                <Text style={styles.notaText}>{resultado}</Text>
            </View>
        </View>
    }

    function MenuHorizontal( {sigla} ){
        return(
            <TouchableOpacity style={styles.containerMenu}>
                <View>
                    <Text style={styles.menuText}>{sigla}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    function Notas( {nome, resultado} ){
        return(
            <View style={styles.containerNotas}>
                <View style={styles.dadosNotas}>
                    <Text style={styles.notaText}>{nome}</Text>
                    <Text style={styles.notaText}>{resultado}</Text>
                </View>
            </View>
        );
    }
    

    return(
        <View>
            <FlatList 
            keyExtractor={avaliacoes.id}
            data={avaliacoes}
            renderItem={({item})=> <MenuHorizontal sigla={item.id}/>}
            horizontal
            />
            
            <View style={styles.notasContainerFlat}>
                <FlatList 
                keyExtractor={disciplinas.id}
                data={disciplinas}
                renderItem={({item}) => <Notas nome={item.nome} resultado={item.Nota}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMenu: {
        flex: 1,
        marginTop: 20,
        margin: 6,
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: "#cacaca",
        borderRadius: 6,
        marginBottom: 20,
        elevation: 5
    },
    menuText: {
        color: '#313131',
        opacity: 0.8,
    },
    containerNotas: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',       
        width: responsiveWidth(70),
    },
    dadosNotas: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#406799',
        marginVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5,
        height: responsiveHeight(5),
        elevation: 3
    },
    notaText: {
        color: '#ffffff', //#dadada
        opacity: 0.9,
        fontWeight: 'bold'
    },
    notasContainerFlat: {
        marginTop: 30,
    }
});