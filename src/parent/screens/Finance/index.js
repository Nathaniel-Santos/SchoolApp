import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet, 
  View, 
  Text,
  TouchableWithoutFeedback,
  Image,
  Animated
} from 'react-native';

import {
  responsiveWidth
} from "react-native-responsive-dimensions";


export default class FinanceScreen extends React.Component {
  animation = new Animated.Value(0);

  constructor() {
    super()
    this.state={
      showMe: false
    }
  }

  //Reconhecer toque no menu - EXPANDIR ITEM E ANIMAR IMAGEM DE SETA
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    this.setState({
      showMe: !this.state.showMe
    })
    
    Animated.spring(this.animation, {
      toValue,
      friction: 5
    }).start();

    this.open = !this.open;
  };
  
  render() {  
    const rotation = {
      transform: [ 
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "180deg"]
          })
        }
      ]
    }

    return (
        <View style={styles.container}>
          <View style={styles.headerInfo}>
              <View style={styles.name}>
                <Text style={styles.student}>ALUNO: </Text>
                <Text style={styles.studentContent}>JOSÉ NATHANIEL </Text>
              </View>

              <View style={styles.otherInfo}>
                <Text style={[styles.year]}>ANO: </Text>
                <Text style={styles.yearContent}>2020</Text>
                <Text style={styles.filter}>FILTRO: </Text>
                <Text style={styles.filterContent}>TODAS</Text>
              </View>
            </View>
          <View style={styles.container2}>
          
            <TouchableWithoutFeedback  onPress={this.toggleMenu}>
              <View style={styles.buttonPaid}>
                <Text style={styles.texto}>JANEIRO</Text>
                <Animated.View style={[styles.btnRotate, rotation]}>
                  <Image style={styles.arrowDown} source={require('../../../img/arrow_down.png')}/>
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>

            <>
            {
                this.state.showMe?
                <View style={{
                  margin: 2, fontSize: 20, borderWidth: 2, paddingTop: 10, 
                  paddingHorizontal: 15, marginTop: -5, borderColor: '#fff', borderRadius: 5, backgroundColor: '#fff'}}>
                  <View style={{marginBottom: 5,justifyContent: 'space-between',flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold'}}>VENCIMENTO </Text>
                      <Text style={{
                        opacity: 0.5, fontWeight: 'bold', backgroundColor: '#f0edf6', borderRadius: 4
                    }}>20/01/2020</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold'}}>VALOR </Text>
                      <Text style={{
                        opacity: 0.5, fontWeight: 'bold', backgroundColor: '#f0edf6', borderRadius: 4
                        }}>200,00</Text>
                    </View>
                  </View>

                  <View style={{marginBottom: 5,justifyContent: 'space-between',flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold'}}>DESCONTO: </Text>
                      <Text style={{
                        opacity: 0.5, fontWeight: 'bold', backgroundColor: '#f0edf6', borderRadius: 4
                    }}>20,00</Text>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold'}}>ACRÉSCIMO: </Text>
                      <Text style={{opacity: 0.5, fontWeight: 'bold', backgroundColor: '#f0edf6', borderRadius: 4}}>0,00</Text>
                    </View>
                  </View>

                    <View style={{flexDirection: 'column', paddingTop: 8, justifyContent: 'center', alignContent: 'center'}}>
                      <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>CÓDIGO DIGITÁVEL</Text>
                      <Text style={{
                        opacity: 0.5, fontWeight: 'bold', backgroundColor: '#f0edf6', borderRadius: 4, marginVertical: 4,
                        padding: 4
                        }}>
                        000.84654.0004134.8798.711203.014867982.125465.153.15468432132.014687.54165487.123.12334
                      </Text>
                    </View>

                    <View style={{alignSelf: 'center', marginVertical: 5}}>
                      <TouchableWithoutFeedback  onPress={() => (alert('Copiado com sucesso!'))}>
                        <View style={{
                          paddingTop: 4,width: 150, height: 40, borderWidth: 5, borderColor: '#6695ca', borderRadius: 10
                          }}>
                          <Text style={{color: '#6695ca', alignSelf: 'center', fontWeight: 'bold'}}>COPIAR CÓDIGO</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                </View>
                : null
              }
            </>
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
    arrowDown: {
      marginRight: 5,
    },
    headerInfo: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: '#6695ca',
      height: 50,
      width: responsiveWidth(100)
    },
    name: {
      alignItems: 'flex-start',
      flexDirection: 'row'
    },
    otherInfo: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    container2: {
      marginTop: 30,
      margin: 3
    },
    month: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center'
    },
    button: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      maxHeight: 40,
      height: 0,
      width: responsiveWidth(98),
      margin: 2,
      borderColor: 'black',
      borderRadius: 5,
      backgroundColor: '#336799',
      flexDirection: 'row',
    },
    buttonPaid: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      maxHeight: 40,
      height: 0,
      width: responsiveWidth(98),
      margin: 2,
      borderColor: 'black',
      borderRadius: 5,
      backgroundColor: '#2a996d',
      flexDirection: 'row',
    },
    buttonLate: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      maxHeight: 40,
      height: 0,
      width: responsiveWidth(98),
      margin: 2,
      borderColor: 'black',
      borderRadius: 5,
      backgroundColor: '#99293d',
      flexDirection: 'row'
    },
    texto: {
      textAlign: 'right',
      fontSize: 20,
      color: '#eee',
      marginLeft: 10,
      //marginTop: 4
    },
    status: {
      textAlign: 'left',
      fontSize: 20,
      color: '#eee',
      marginRight: 20,
      //marginTop: 4
    },
    student: {
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#fff',
      marginBottom: 5,
      marginTop: 2,
      marginLeft: 5
    },
    studentContent: {
      fontSize: 14,
      alignSelf: 'center',
      color: '#fff',
      marginBottom: 5,
      marginTop: 2,
      marginLeft: 1
    },
    year: {
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#fff',
      marginBottom: 5,
      marginTop: 2,
      marginLeft: 5
    },
    yearContent: {
      fontSize: 14,
      alignSelf: 'center',
      color: '#fff',
      marginBottom: 5,
      marginTop: 2,
      marginLeft: 1,
      marginRight: 20
    },
    filter: {
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#fff',
      marginBottom: 5,
      marginTop: 2,
      marginLeft: 5
    },
    filterContent: {
      fontSize: 14,
      alignSelf: 'center',
      color: '#fff',
      marginBottom: 5,
      marginTop: 2,
      marginLeft: 1
    },
    btnRotate: {
      width: 25,
      height: 25,
      marginRight: 5
    }
});