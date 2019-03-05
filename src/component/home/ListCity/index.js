import React, { Component } from 'react';
import { Platform, TextInput, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from "./ListCityStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/Entypo';
import { SearchableFlatList } from "react-native-searchable-list";
import { Data } from "../../../api/Data";

let citys = Data.ref('/citys');

export default class ListCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchAttribute: "name",
      ignoreCase: true,
      items: [],

    }
  }

  _handleClickItem = (name) => {
    this.props.navigation.navigate('Home', { city: name })
  }

  // componentWillMount() {
  //   Data.ref("users/001").set(
  //     {
  //       name: "chi",
  //       age: 23
  //     }
  //   ).then(() => {
  //     console.log("Success !");
  //   }).catch((error) => {
  //     console.log(error);
  //   });
    
  // }

  componentDidMount() {
    citys.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items: items });
    });

  }

  render() {
    const { navigate } = this.props.navigation;
    const { items, searchTerm, searchAttribute, ignoreCase } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={{ height: 30, marginTop: 40, flexDirection: "row" }}>
            <Icon name="ios-arrow-round-back" size={34} style={{ width: "15%" }} onPress={() => navigate('Home')} />
            <TextInput style={{ fontSize: 20, width: "70%" }} placeholder="Bạn muốn đi đâu?"
              onChangeText={searchTerm => this.setState({ searchTerm })}
            ></TextInput>
            <Icon name="ios-search" style={{ fontSize: 24, color: "#a9a9a9", width: "15%" }} />
          </TouchableOpacity>
          <View style={{ backgroundColor: "#000", height: 1, marginTop: 5 }}></View>
        </View>

        <SearchableFlatList
          data={items}
          searchTerm={searchTerm}
          ignoreCase={ignoreCase}
          searchAttribute={searchAttribute}
          renderItem={
            ({ item }) => <View style={{ flexDirection: "column", paddingTop: 10 }}>
              <TouchableOpacity style={styles.item} onPress={() => this._handleClickItem(item.name)} >
                <IconLocation name="location-pin" size={30} style={{ width: "10%", paddingTop: 5, color: "green" }} />
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

