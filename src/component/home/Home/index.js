import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './HomeStyle';
import Schedule from '../Schedule';

import Icon from 'react-native-vector-icons/Ionicons';
import Discover from '../Discover';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSchedule: true,
      isDiscover: false,
      isSearch: false,
    }
  }

  _handleClickSchedule = () => {
    this.setState({
      isSchedule: true,
      isDiscover: false,
      isSearch: false,
    })
  }

  _handleClickDiscover = () => {
    this.setState({
      isSchedule: false,
      isDiscover: true,
      isSearch: false,
    })
  }

  _handleClickSearch = () => {
    this.setState({
      isSchedule: false,
      isDiscover: false,
      isSearch: true,
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.schedule} onPress={this._handleClickSchedule}>
            <Text style={styles.textHeader}>Lên lịch trình</Text>
            {(this.state.isSchedule) && <View style={styles.line}></View>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.discover} onPress={this._handleClickDiscover}>
            <Text style={styles.textHeader}>Khám phá</Text>
            {(this.state.isDiscover) && <View style={styles.line}></View>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.search}>
            <Icon name="ios-search" style={styles.iconSeacrh} size={28} onPress={() => navigate('Map')} />
          </TouchableOpacity>
        </View>
        {(this.state.isSchedule) && <View style={{ flex: 5 }}><Schedule /></View>}
        {(this.state.isDiscover) && <View style={{flex:3}}><Discover /></View>}
        <View style={{flex:7, backgroundColor:"#555555"}}>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Map')}
        />
        </View>
      </View>
    );
  }
}



