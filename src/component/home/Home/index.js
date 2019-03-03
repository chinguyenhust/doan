import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, FlatList , TextInput} from 'react-native';
import styles from './HomeStyle';
import Schedule from '../Schedule';

import Icon from 'react-native-vector-icons/Ionicons';
import Discover from '../Discover';
// import SearchableFlatlist from "searchable-flatlist";

const data = [
  { id: 1, name: "Francesco Raoux" },
  { id: 2, name: "Tasha Bonanno" },
  { id: 3, name: "Merle Braunstein" },
  { id: 4, name: "Aleda Bouzan" },
  { id: 5, name: "Issiah Elnaugh" }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSchedule: true,
      isDiscover: false,
      isSearch: false,
      searchTerm: ""
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
    let { sContainer, sSearchBar, sTextItem } = style1s;
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
            <Icon name="ios-search" style={styles.iconSeacrh} size={28} onPress={() => navigate('ListCity')} />
          </TouchableOpacity>
        </View>
        {(this.state.isSchedule) && <View style={{ flex: 5 }}><Schedule navigate={navigate} /></View>}
        {(this.state.isDiscover) && <View style={{ flex: 3 }}><Discover navigate={navigate} /></View>}
        <View style={{ flex: 7, backgroundColor: "#555555" }}>
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('DatePicker')}
          />
          {/* <View style={sContainer}>
            <TextInput
              placeholder={"Search"}
              style={sSearchBar}
              onChangeText={searchTerm => this.setState({ searchTerm })}
            />
            <SearchableFlatlist
              searchProperty={"name"}
              searchTerm={this.state.searchTerm}
              data={data}
              containerStyle={{ flex: 1 }}
              renderItem={({ item }) => <Text style={sTextItem}>{item.name}</Text>}
              keyExtractor={item => item.id}
            />
          </View> */}

        </View>
      </View>
    );
  }
}

const style1s = StyleSheet.create({
  sContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  sTextItem: {
    height: 50,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18
  },
  sSearchBar: {
    paddingHorizontal: 10,
    margin: 10,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 18
  }
});


