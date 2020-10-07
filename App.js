import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ScreenLogin from './loginScreen';
import StudentNavigator from './src/student/routes'
import ParentNavigator from './src/parent/routes'

const Navigator = createStackNavigator({
  ScreenLogin: {screen: ScreenLogin,
  navigationOptions:{
    headerShown: false
  }},
  ParentNavigator: {screen: ParentNavigator,
  navigationOptions: {
    headerShown: false
  }},
  StudentNavigator: {screen: StudentNavigator,
  navigationOptions: {
    headerShown: false
  }}
})

const App = createAppContainer(Navigator);

export default App;
