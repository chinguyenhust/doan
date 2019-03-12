import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAdd from 'react-native-vector-icons/Ionicons';
import styles from './CreatSurveyStyle';

export default class CreatSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      isAdd: false,
      options: [],
      optionValue: "",
    }
  }

  _handleAddOption = () => {
    var { options, optionValue} = this.state;
    options.push({value: optionValue, vote: 0});
    console.log("options" ,options)
    this.setState({
      options: options,
      isAdd: true
    })
  }

  render() {
    const { navigate } = this.props.navigation;
  

    return (
      <View style={styles.container} >
        <View style={styles.tapbar}>
          <TouchableOpacity style={styles.tap}>
            <Icon name="ios-arrow-round-back" size={34} style={{ width: "15%" }} onPress={() => { this.props.navigation.goBack() }} />
            <Text style={{ fontSize: 24, width: "70%" }}>Khảo sát ý kiến</Text>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#000", alignSelf: "stretch" }}></View>
        </View>
        <View style={{ flex: 16, paddingLeft: 20, paddingRight: 20, flexDirection: "column" }}>

          <View style={{ flexDirection: "column", marginTop: 20 }}>
            <Text style={{ fontSize: 16 }}>Câu hỏi</Text>
            <TextInput
              placeholder="Nhập câu hỏi khảo sát"
              style={styles.inputQuestion}
              onChangeText={(nameEvent) => {
                this.setState({ nameEvent });
              }}
              value={this.state.nameEvent}
            />
          </View>
          <View style={styles.option}>
            <IconAdd name="ios-add" style={styles.icon} size={30} onPress={()=>this._handleAddOption}/>
            <TextInput placeholder="Thêm option"
              style={styles.input}
              onChangeText={(optionValue) => {
                this.setState({ optionValue });
              }}
              value={this.state.optionValue}
            />
          </View>

          <TouchableOpacity style={styles.buttonCreat} onPress={() => navigate('DetailEvent')}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Tạo ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
