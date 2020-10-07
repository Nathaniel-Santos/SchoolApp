import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src'
import { color } from 'react-native-reanimated';
import { Image } from 'react-native';
import 'react-native-gesture-handler';

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'HOME',
            headerTitleStyle: {
                color: '#eeeeee',
                fontWeight: 'bold'
            },
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#406799'
            },
            headerTintColor: '#ffffff'
        }
    }
    
});

export default HomeNavigator;