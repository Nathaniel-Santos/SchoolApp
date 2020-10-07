import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Home'
import CardScreen from '../Card';
import FinanceScreen from '../Finance';
import BoletimScreen from '../Boletim';


const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'RESPONSÁVEL',
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
    },
    Boletim: {
        screen: BoletimScreen,
        navigationOptions: {
            title: 'Boletim',
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
    },
    Finance: {
        screen: FinanceScreen,
        navigationOptions: {
            title: 'FINANCEIRO',
            headerTitleStyle: {
                color: '#ffffff',
                fontWeight: 'bold'
            },
            headerTitleAlign: 'center',
            headerStatusBarHeight: 0,
            headerStyle: {
                backgroundColor: '#406799'
            },
            headerTintColor: '#ffffff'
        }
    }
});

export default HomeNavigator;