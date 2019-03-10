import React, { Component } from 'react';
import { Platform, TextInput, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import styles from "./CreatScheduleScreenStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/Entypo';
import MyLocation from 'react-native-vector-icons/MaterialIcons';
import RadioGroup from 'react-native-radio-buttons-group';

import { Data } from "../../../api/Data";

let vehicles = Data.ref('/vehicles');


export default class CreatScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  data: [
      //       {
      //           label: 'Default value is same as label',
      //       },
      //       // {
      //       //     label: 'Value is different',
      //       //     value: "I'm not same as label",
      //       // },
      //       // {
      //       //     label: 'Color',
      //       //     color: 'green',
      //       // },
      //       // {
      //       //     disabled: true,
      //       //     label: 'Disabled',
      //       // },
      //       // {
      //       //     label: 'Size',
      //       //     size: 32,
      //       // },
      //   ],
      data: this.props.navigation.getParam('data', [{ value: 1, label: "Ô tô" }])
    }
    console.log("2222222  ", this.state.data)
  }

  // componentWillMount() {
  //   vehicles.on('value', (snapshot) => {
  //     let data = snapshot.val();
  //     let items = Object.values(data);
  //     const arr = [];
  //     items.forEach(function(element) {
  //       arr.push({
  //         label: element.name,
  //         value: element.id
  //       });
  //     });
  //     console.log("arrrrr  ", arr)
  //     this.setState({ data: arr });
  //   });

  // }

  onPress = (data) => {
    this.setState({ data });
  }

  render() {
    console.log("dataaa  ", this.state.data);
    const { navigate } = this.props.navigation;
    var sumday = this.props.navigation.getParam("sumday", 1);
    console.log("sum tao", sumday)

    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={{ height: 30, marginTop: 40, flexDirection: "row" }}>
            <Icon name="ios-arrow-round-back" size={34} style={{ width: "15%", paddingLeft: 10 }} onPress={() => { this.props.navigation.goBack() }} />
            <Text style={{ fontSize: 24 }}> Tạo lịch trình</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: "#000", height: 1, marginTop: 5 }}></View>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.item} onPress={() => navigate("ListCity")}>
            <View style={styles.icon}>
              <MyLocation name="my-location" size={26} />
            </View>
            <View style={styles.location}>
              <Text style={styles.lable}>
                Điểm xuất phát
              </Text>
              <Text style={styles.name}>
                Hà Nội
              </Text>
              <View style={styles.line}>

              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => navigate("ListCity")}>
            <View style={styles.icon}>
              <IconLocation name="location-pin" size={26} />
            </View>
            <View style={styles.location}>
              <Text style={styles.lable}>
                Điểm đến
              </Text>
              <Text style={styles.name}>
                Hồ Chí Minh
              </Text>
              <View style={styles.line}>

              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.item}>

            <View style={styles.icon}>
              <Icon name="ios-calendar" size={26} />
            </View>
            <View style={styles.location}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.startDate} onPress={() => navigate("DatePicker")}>
                  <Text style={styles.lable}>
                    Ngày khởi hành
                  </Text>
                  <Text style={styles.name}>
                    03/03/2019
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startDate} onPress={() => navigate("DatePicker")}>
                  <Text style={styles.lable}>
                    Ngày về
                </Text>
                  <Text style={styles.name}>
                    09/03/2019
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.line}>
              </View>
            </View>
          </View>

          <View style={styles.itemVehicle}>
            <View style={styles.icon}>
              <Icon name="ios-car" size={26} />
            </View>
            <View style={styles.lableVehicle}>
              <Text style={styles.lable}>
                Phương tiện đi lại
              </Text>
            </View>
          </View>
          <View style={styles.vehicle}>
            <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
          </View>
        </View>

        <TouchableOpacity style={styles.buttonNext} onPress={()=> navigate("Plan", {"sumday": sumday})}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Tiếp tục</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

