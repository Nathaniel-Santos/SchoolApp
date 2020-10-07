import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { 
  View, 
  Image,
} from 'react-native';
import ProfileScreen from './screens/Profile';
import InboxScreen from './screens/Inbox';
import HomeRoutes from './screens/HomeRoutes';



const ParentRoutes = createMaterialBottomTabNavigator(
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
) 

const ParentNavigator = createAppContainer(ParentRoutes)

export default ParentNavigator;