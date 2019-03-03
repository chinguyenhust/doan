import React, { Component } from 'react';
import { Platform, TextInput, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from "./ListCityStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/Entypo';


export default class ListCity extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ height: 30, marginTop: 60, flexDirection: "row" }}>
          <Icon name="ios-arrow-round-back" size={34} onPress={() => navigate('Home')} />
          <TextInput style={{ fontSize: 20, paddingLeft: 20 }} placeholder="Bạn muốn đi đâu?"></TextInput>
        </TouchableOpacity>
        
        <FlatList
          data={[
            {
              id: 1,
              name: "Hà Nội",
              description: "Nghìn năm văn hiến"
            },
            {
              id: 2,
              name: "Đà Nẵng",
              description: "Thành phố ngàn hoa"
            },
            {
              id: 3,
              name: "Hồ Chí Minh",
              description: "Thành phố hiện đại"
            },
          ]}
          renderItem={
            ({ item }) => <View style={{ flexDirection: "column", paddingTop:10 }}>
              <View style={styles.item}>
                <IconLocation name="location-pin" size={30} style={{ width: "10%", paddingTop: 5 }} />
                <View style={styles.info}>
                  <Text style={styles.textName}>{item.name}</Text>
                  <Text style={styles.textDescription}>{item.description}</Text>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>}
        />
      </View>
    );
  }
}

