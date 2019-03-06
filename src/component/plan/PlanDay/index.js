import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class PlanDay extends Component {
    
      render() {
        
        return (
            <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
        );
      }
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });

