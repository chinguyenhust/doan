import React, { Component } from 'react';
import { Platform, TextInput, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from "./ListCityStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/Entypo';
import { SearchableFlatList } from "react-native-searchable-list";

export default class ListCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
      searchTerm: "",
      searchAttribute: "name",
      ignoreCase: true,
      
    }
  }

  _handleClickItem = (name) => {
    this.props.navigation.navigate('Home', {city: name})
  }

  render() {
    const { navigate } = this.props.navigation;
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ height: 30, marginTop: 60, flexDirection: "row" }}>
          <Icon name="ios-arrow-round-back" size={34} onPress={() => navigate('Home')} />
          <TextInput style={{ fontSize: 20, paddingLeft: 20 }} placeholder="Bạn muốn đi đâu?"
            onChangeText={searchTerm => this.setState({ searchTerm })}
          ></TextInput>
        </TouchableOpacity>

        <SearchableFlatList
          data={data}
          searchTerm={searchTerm} 
          ignoreCase={ignoreCase}
          searchAttribute={searchAttribute}
          renderItem={
            ({ item }) => <View style={{ flexDirection: "column", paddingTop: 10 }}>
              <TouchableOpacity style={styles.item} onPress={()=>this._handleClickItem(item.name)} >
                <IconLocation name="location-pin" size={30} style={{ width: "10%", paddingTop: 5 }} />
                <View style={styles.info}>
                  <Text style={styles.textName}>{item.name}</Text>
                  <Text style={styles.textDescription}>{item.description}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.line}></View>
            </View>
            }
          keyExtractor={item => item.id}
        />

      </View>
    );
  }
}

