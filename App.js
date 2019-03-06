import React, { Component } from 'react';
import Home from './src/component/home/Home';
import Map from './src/component/home/Map';
import DatePicker from './src/component/home/DatePicker';
import ListCity from './src/component/home/ListCity';
import CreatScheduleScreen from './src/component/home/CreatScheduleScreen';
import Plan from './src/component/plan/Plan';
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Map: {
      screen: Map,
    },
    DatePicker: {
      screen: DatePicker,
    },
    ListCity: {
      screen: ListCity,
    },
    CreatScheduleScreen: {
      screen: CreatScheduleScreen,
    },
    Plan: {
      screen: Plan,
    }
  
  },{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
  
);

export default createAppContainer(MainStack)