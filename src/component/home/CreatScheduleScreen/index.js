import React, { Component } from 'react';
import { Platform, TextInput, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from "./CreatScheduleScreenStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/Entypo';

export default class CreatScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "column"}}>
          <TouchableOpacity style={{ height: 30, marginTop: 40, flexDirection: "row" }}>
            <Icon name="ios-arrow-round-back" size={34} style={{width: "15%"}} onPress={() => navigate('Home')} />
            <TextInput style={{ fontSize: 20,width: "70%"}} placeholder="Bạn muốn đi đâu?"
              onChangeText={searchTerm => this.setState({ searchTerm })}
            ></TextInput>
            <Icon name="ios-search" style={{fontSize:24, color: "#a9a9a9",width: "15%"}}/>
          </TouchableOpacity>
          <View style={{backgroundColor: "#000", height: 1, marginTop: 5}}></View>
        </View>

        
      </View>
    );
  }
}

