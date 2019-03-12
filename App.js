import React, { Component } from 'react';
import Home from './src/component/home/Home';
import Map from './src/component/home/Map';
import DatePicker from './src/component/home/DatePicker';
import ListCity from './src/component/home/ListCity';
import CreatScheduleScreen from './src/component/home/CreatScheduleScreen';
import Plan from './src/component/plan/Plan';


import MyGroup from './src/component/group/MyGroup';
import CreatGroup from './src/component/group/CreatGroup';
import DetailGroup from './src/component/group/DetailGroup';
import Event from './src/component/group/Event';
import InfoGroup from './src/component/group/InfoGroup';
import CreatEvent from './src/component/group/CreatEvent';
import CreatSurvey from './src/component/group/CreatSurvey';
import DetailEvent from './src/component/group/DetailEvent';

import Main from './src/component/login/Main';
import Loading from './src/component/login/Loading'
import Login from './src/component/login/Login'
import SignUp from './src/component/login/SignUp'

import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
const MainStack = createStackNavigator(
  {
    Loading: {
      screen: Loading
    },
    Home: {
      screen: MyGroup,
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
    },
    CreatGroup: {
      screen: CreatGroup,
    },
    DetailGroup: {
      screen: DetailGroup,
    },
    Event: {
      screen: Event,
    },
    InfoGroup: {
      screen: InfoGroup,
    },
    CreatEvent: {
      screen: CreatEvent,
    },
    CreatSurvey: {
      screen: CreatSurvey,
    },
    DetailEvent: {
      screen: DetailEvent,
    },
    Login: {
      screen: Login
    },
    Main: {
      screen: Main
    },
    SignUp: {
      screen: SignUp
    },
    Loading: {
      screen: Loading
    }


  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }

);

export default createAppContainer(MainStack)