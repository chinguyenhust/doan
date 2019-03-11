import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './CreatGroupStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';
import IconAdd from 'react-native-vector-icons/MaterialIcons';

export default class CreatGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      filePath: {},
      isLoad: false,
      schedule: ""
    };
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
          isLoad: true
        });
      }
    });
  };
  render() {
    console.log("111111   ", this.state.filePath)
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={{ height: 30, flexDirection: "row" }}>
            <Icon name="ios-arrow-round-back" size={34} style={{ width: "15%" }} onPress={() => { this.props.navigation.goBack() }} />
            <Text style={{ fontSize: 24 }}>Tạo nhóm mới</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: "#000", height: 1, marginTop: 5 }}></View>
        </View>

        <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.chooseFile.bind(this)}>
          {(!this.state.isLoad) ?
            <IconAdd name="add-circle" size={150} style={{ color: "gray", marginTop: 10 }} /> :
            <Image
              source={{ uri: this.state.filePath.uri }}
              style={{ width: 130, height: 130, borderRadius: 65, marginTop: 20 }}
            />
          }
        </TouchableOpacity>

        <View style={{ flexDirection: "column", marginTop: 20 }}>
          <Text style={{ fontSize: 16 }}>Tên nhóm</Text>
          <TextInput
            placeholder="Đặt tên nhóm"
            style={styles.inputName}
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
        </View>
        <View style={{ flexDirection: "column", marginTop: 20 }}>
          <Text style={{ fontSize: 16 }}>Kế hoạch cho chuyến đi</Text>
          <TextInput
            placeholder="Nhập kế hoạch"
            style={styles.inputSchedule}
            onChangeText={(schedule) => {
              this.setState({ schedule });
            }}
            value={this.state.schedule}
            numberOfLines={4}
            multiline={true}
          />
        </View>


        {/*<Image 
          source={{ uri: this.state.filePath.path}} 
          style={{width: 100, height: 100}} />*/}
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
          }}
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={{ uri: this.state.filePath.uri }}
          style={{ width: 250, height: 250 }}
        />
        */}
        {/* <Text style={{ alignItems: 'center' }}>
          {this.state.filePath.uri}
        </Text> */}

      </View>
    );
  }
}
