
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from "./ScheduleStyle";
import { Data } from "../../../api/Data";

let vehicles = Data.ref('/vehicles');

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateStart: null,
      dateEnd: null,
      data: []
    }
  }


  componentDidMount() {
    vehicles.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      const arr = [];
      items.forEach(function(element) {
        arr.push({
          label: element.name,
          value: element.id
        });
      });
      console.log("arrrrr  ", arr)
      this.setState({ data: arr });
    });
  }

  render() {
    const { navigate } = {...this.props};
    const { city } = {...this.props};
    const { startDate } = {...this.props};
    const { untilDate } = {...this.props};
    console.log("111111111  ", this.state.data)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lên lịch trình cho chuyến đi</Text>
        <TouchableOpacity style={styles.place} onPress={() => navigate('ListCity')}>
          <Text style={{ color: "#000" }}>Điểm đến</Text>
          { (city === "") ?
            <Text style={{ color: "#A9A9A9", paddingTop: 5, fontSize: 16 }}>Chọn địa điểm đến, ví dụ: Hà Nội</Text> :
            <Text style={{color: "#000", paddingTop: 5, fontSize: 16}}>{city}</Text>
          }
          
        </TouchableOpacity>
        <View style={styles.dateTime}>
          <TouchableOpacity style={styles.date} onPress={() => navigate('DatePicker')}>
            <Text style={{ color: "#000" }}>Ngày đi</Text>
            { (startDate === null || startDate==="Invalid date") ?
            <Text style={{ color: "#A9A9A9", paddingTop: 5, fontSize: 16 }}>Chọn ngày đến</Text> :
            <Text style={{color: "#000", paddingTop: 5, fontSize: 16}}>{startDate}</Text>
          }
          </TouchableOpacity>
          <View style={styles.line}>

          </View>
          <TouchableOpacity style={styles.time} onPress={() => navigate('DatePicker')}>
            <Text style={{ color: "#000" }}>Ngày về</Text>
            { (untilDate === null || untilDate==="Invalid date") ?
            <Text style={{ color: "#A9A9A9", paddingTop: 5, fontSize: 16 }}>Chọn ngày về</Text> :
            <Text style={{color: "#000", paddingTop: 5, fontSize: 16}}>{untilDate}</Text>
          }
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.buttonCreat} onPress={() => navigate('CreatScheduleScreen', {'data': this.state.data})}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Tạo ngay</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

