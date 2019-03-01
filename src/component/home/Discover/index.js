
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from "./DiscoverStyle";


export default class Discover extends Component{
    constructor(props) {
        super(props);
        this.state={
          
        }
      }
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.title}>Bạn muốn đi đâu?</Text>
            <View style={styles.place}>
              <Text style={{color:"#000"}}>Điểm đến</Text>
              <Text style={{color:"#A9A9A9", paddingTop: 5, fontSize:18}}>Chọn địa điểm đên, ví dụ: Hà Nội</Text>
            </View>
            <View style={styles.buttonCreat}>
              <Text style={{color:"#fff", fontSize:18}}>Tìm kiếm</Text>
            </View>
      </View>
    );
  }
}

