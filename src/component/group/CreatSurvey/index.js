import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './CreatSurveyStyle'

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <View style={styles.container} >
        <TouchableOpacity style={{ flex: 1, flexDirection: "row", paddingLeft: 20, paddingTop: 10, alignSelf: "stretch" }}>
          <Icon name="ios-arrow-round-back" size={34} style={{ width: "15%" }} onPress={() => { this.props.navigation.goBack() }} />
          <Text style={{ fontSize: 24, width: "70%" }}>Tạo khảo sát</Text>
         
        </TouchableOpacity>
      </View>
    );
  }
}
