import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView, 
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard,
  StatusBar,
  ToastAndroid
} from 'react-native';
import 'react-native-gesture-handler';
import 'react-navigation';

import { createAppContainer, NavigationActions } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  responsiveWidth
} from "react-native-responsive-dimensions";


export default function ScreenLogin( {navigation} ) {  
  //Login Data
  const userInfo = {login: '123', password: '123'}
  const [loginEntry, setloginEntry] = useState(0)
  const [password, setpassword] = useState(0)
  //Components State
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 100}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 130, y:130}));
  const [loginTxtStudent, setloginTxtStudent] = useState('#fff');
  const [loginBkStudent, setloginBkStudent] = useState('#336899');
  const [loginTxtParent, setloginTxtParent] = useState('#336899'); //
  const [loginBkParent, setloginBkParent] = useState('#fff');
  const [parentSelected, setParentSelected] = useState(false);
  const [studentSelected, setStudentSelected] = useState(true);

  //Login authentication
  function Authenticate() {

    if(userInfo.login === loginEntry.loginEntry && userInfo.password === password.password && studentSelected === true)
    {
      navigation.navigate('StudentNavigator'); //User Auth
    } 
    else if (userInfo.login == loginEntry.loginEntry && userInfo.password == password.password && parentSelected == true)
    {
      navigation.navigate('ParentNavigator'); //Parent Auth
    } 
    else 
    {
      ToastAndroid.show('Credencial Inválida', ToastAndroid.CENTER); //Incorrect Auth
    }
  }
  
  //Parent selection on the login form
  function parentSwith(){
    //Selected
    setParentSelected(true);
    setStudentSelected(false);
    //Change Colors
    setloginTxtStudent('#336899');
    setloginBkStudent('#fff');
    setloginTxtParent('#fff');
    setloginBkParent('#336899');
  }

  //Student selection on the login form
  function studentSwith(){
    //Selected
    setStudentSelected(true);
    setParentSelected(false);
    //Change Colors
    setloginTxtStudent('#fff');
    setloginBkStudent('#336899');
    setloginTxtParent('#336899');
    setloginBkParent('#fff');
  }
  
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    
    Animated.parallel([
      Animated.spring(offset.y, {
        useNativeDriver: true,
        toValue: 0,
        speed: 1,
        //bounciness: 4
      }),
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 1,
        duration: 400
      })
    ]).start();
    
  }, [])
  
  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 55,
        duration: 100
      })
      
    ]).start();
  }
  
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 130,
        duration: 100
      })
      
    ]).start();
  }
  
  return (
    
    <KeyboardAvoidingView style={styles.background}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View 
          style={styles.logo}>
          <Animated.Image 
           style={{
             width: logo.x, 
             height: logo.y
          }} 
            source={require('./src/img/infodat.jpg')}/>
        </View>

        <Animated.View 
          style={[
            styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y}
            ]
          }
          ]}>
          
          <View style={{flexDirection: 'row', marginTop: -50, marginBottom: 40}}>
            <TouchableWithoutFeedback onPress={studentSwith}>
              <View style={{
                justifyContent: 'center',width: 120, height: 50, backgroundColor: loginBkStudent, marginHorizontal: -2, 
                borderWidth: 2, borderColor: '#cacaca', borderTopLeftRadius: 8, borderBottomLeftRadius: 8}}>
                <Text style={{
                  color: loginTxtStudent, alignSelf: 'center', fontWeight: 'bold'}}
                    >ALUNO</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={parentSwith}>
              <View style={{
                justifyContent: 'center', width: 120, height: 50, backgroundColor: loginBkParent, marginHorizontal: -2,
                borderWidth: 2, borderColor: '#cacaca', borderTopRightRadius: 8, borderBottomRightRadius: 8}}>
                <Text style={{
                  color: loginTxtParent, alignSelf: 'center', fontWeight: 'bold'}}
                    >RESPONSÁVEL</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <TextInput 
          style={styles.input}
          placeholder="Login"
          keyboardType='numeric'          
          autoCorrect={false}
          onChangeText={(loginEntry) => {setloginEntry({loginEntry})}}
          />

          <TextInput 
          style={styles.input}
          placeholder="Senha"
          keyboardType='numeric'
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(password) => {setpassword({password})}}
          />

          <TouchableOpacity style={styles.btnSubmit}
          onPress={Authenticate}>
            <Text style={styles.submit}>Acessar</Text>
          </TouchableOpacity>


        </Animated.View >

        </KeyboardAvoidingView> 
          
          
    );
  
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: -100,
    marginTop: -80,
  },
  input: {
    backgroundColor: '#ddd',
    width: '90%',
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
    borderRadius: 8,
    padding: 10 
  },
  btnSubmit: {
    backgroundColor: '#336899',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  submit: {
    color: '#fff',
    fontSize: 18
  },
  btnRegister: {
    margin: 10
  },
  register: {
    color: '#000'
  }
});

