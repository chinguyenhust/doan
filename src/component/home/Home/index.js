import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Map')}
          />
        );
      }
}



