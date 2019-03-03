
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from "./DiscoverStyle";


export default class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { navigate } = { ...this.props };
    const { city } = { ...this.props };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bạn muốn đi đâu?</Text>
        <TouchableOpacity style={styles.place} onPress={() => navigate('ListCity')}>
          <Text style={{ color: "#000" }}>Điểm đến</Text>
          {(city === "") ?
            <Text style={{ color: "#A9A9A9", paddingTop: 5, fontSize: 16 }}>Chọn địa điểm đến, ví dụ: Hà Nội</Text> :
            <Text style={{ color: "#000", paddingTop: 5, fontSize: 16 }}>{city}</Text>
          }
        </TouchableOpacity>
        <View style={styles.buttonCreat}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Tìm kiếm</Text>
        </View>
      </View>
    );
  }
}

