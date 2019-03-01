import React, { Component } from 'react';
import Home from './src/component/home/Home'
import Map from './src/component/home/Map'
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Map: {
      screen: Map,
    }
  
  },{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
  
);

export default createAppContainer(MainStack)