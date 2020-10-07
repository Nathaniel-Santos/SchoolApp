import React from 'react';
import { View, Image } from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import ProfileScreen from './screens/Profile';
import InboxScreen from './screens/Inbox';
import HomeRoutes from './screens/HomeRoutes';



const StudentRoutes = createMaterialBottomTabNavigator(
    {
      INICIO: {
        screen: HomeRoutes,
        navigationOptions: {
          tabBarIcon: ( {tintColor} ) => (
            <View>
              <Image style={{width: 27, height: 27}} source={require('../img/home.png')} />
            </View>
          )
        }
      },
      USUARIO: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ( {tintColor} ) => (
            <View>
              <Image style={{width: 27, height: 27}} source={require('../img/student.png')} />
            </View>
          )
        }
      },
      Entrada: {
        screen: InboxScreen,
        navigationOptions: {
          tabBarIcon: ( {tintColor} ) => (
            <View>
              <Image style={{width: 27, height: 27}} source={require('../img/inbox.png')} />
            </View>
          )
        }
      }
    },
    {
      initialRouteName: 'INICIO',
      activeColor: '#ffffff', //#f0edf6
      inactiveColor: '#7f94b5',
      barStyle: {backgroundColor: '#003d6b'}
    }
  );

  const StudentNavigator = createAppContainer(StudentRoutes)

  export default StudentNavigator;
  
