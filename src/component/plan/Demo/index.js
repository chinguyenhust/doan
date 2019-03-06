import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Demo extends Component {
    
      render() {
        
        return (
            <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
         
        );
      }
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });

