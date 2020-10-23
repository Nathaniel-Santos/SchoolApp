import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'

import {
    responsiveFontSize,
    responsiveScreenFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth
  } from "react-native-responsive-dimensions";

export default function Detail1( {navigation} ){

    const disciplinas = [
        {id: 'AV1', nota: '7.5'},
        {id: 'AV2', nota: '6.0'},
        {id: 'RE1S', nota: ' '},
        {id: 'MD1S', nota: '6.75'},
        {id: 'AV3', nota: '9.0'},
        {id: 'AV4', nota: '8.0'},
        {id: 'RE2S', nota: ' '},
        {id: 'MD2S', nota: '8.5'},
        {id: 'MDF', nota: '7.6'},
      ]

    const navigate = navigation;

    const disciplina = navigation.state.params.NomeDisciplina

    const ids = String(navigation.state.params.Avaliacoes)

    function Notas( {sigla, valorNota} ){

        return(
            <View style={styles.dados}>
                <Text style={styles.cod}>{sigla}</Text>
                <Text style={styles.cod}>{valorNota}</Text>
            </View>
        );
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{disciplina}</Text>
            
            <FlatList 
            keyExtractor={disciplinas.id}
            data={disciplinas}
            renderItem={({item}) => <Notas sigla={item.id} valorNota={item.nota}/>} />

        </View>
    );
}

const styles = StyleSheet.create({
    dados: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,
        width: responsiveScreenWidth(70),
        height: responsiveScreenWidth(7),
        paddingHorizontal: 10,
        backgroundColor: '#dadada',

    },
    cod: {
        fontSize: responsiveScreenFontSize(1.7),
        fontWeight: 'bold',
        opacity: 0.7
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
    },
    titulo: {
        fontSize: responsiveFontSize(2.4),
        //fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#336799',
        paddingBottom: 25
    }
});