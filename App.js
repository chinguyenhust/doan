import React, {Component} from 'react';
import Home from './src/component/home/Home'
import Map from './src/component/home/Map'
import { StackNavigator,createStackNavigator, createAppContainer } from 'react-navigation'; 
const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Map: {
      screen: Map,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

 export default createAppContainer(MainStack)