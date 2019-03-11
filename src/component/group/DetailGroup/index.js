import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./DetailGroupStyle";
import Map from '../../home/Map'

export default class DetailGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChat: true,
      isMap: false,
      isEvent: false,

    }
  }

  handleClickMap = () => {
    this.setState({
      isMap: true,
      isChat: false,
      isEvent: false
    })
  }
  handleClickChat = () => {
    this.setState({
      isMap: false,
      isChat: true,
      isEvent: false
    })
  }
  handleClickEvent = () => {
    this.setState({
      isMap: false,
      isChat: false,
      isEvent: true
    })
  }

  render() {


    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "column", }}>
          <TouchableOpacity style={{ height: 40, flexDirection: "row", marginLeft: 20 }}>
            <Icon name="ios-arrow-round-back" size={34} style={{ width: "15%" }} onPress={() => { this.props.navigation.goBack() }} />
            <Text style={{ fontSize: 24 }}>Tên nhóm</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tapbar}>
          <TouchableOpacity style={styles.tapbarItem} onPress={this.handleClickChat}>
            <Text style={(this.state.isChat) ? styles.lableAfter : styles.lableBefore}>Chat nhóm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tapbarItem} onPress={this.handleClickMap}>
            <Text style={(this.state.isMap) ? styles.lableAfter : styles.lableBefore}>Bản đồ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tapbarItem} onPress={this.handleClickEvent}>
            <Text style={(this.state.isEvent) ? styles.lableAfter : styles.lableBefore}>Sự kiện</Text>
          </TouchableOpacity>

        </View>

        <View style={{width: "100%", height: 600}}>
          {(this.state.isMap) && <Map />}
        </View>
      </View>
    );
  }
}


