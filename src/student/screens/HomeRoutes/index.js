import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Home'
import CardScreen from '../Card';
import FinanceScreen from '../Finance';
import BoletimScreen from '../Boletim';
import { withNavigation } from 'react-navigation';


const StudentNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'ALUNO',
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

export default withNavigation(StudentNavigator);