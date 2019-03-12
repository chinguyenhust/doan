import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    const {day} = {...this.props}


    return (
      <View style={[styles.scene, { backgroundColor: '#ff4081' }]} >
      <Text>Ngày {day}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

