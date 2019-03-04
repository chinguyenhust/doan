
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from "./ScheduleStyle";


export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateStart: null,
      dateEnd: null,
    }
  }

  render() {
    const { navigate } = {...this.props};
    const { city } = {...this.props};
    const { startDate } = {...this.props};
    const { untilDate } = {...this.props};
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
        <TouchableOpacity style={styles.buttonCreat} onPress={() => navigate('CreatScheduleScreen')}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Tạo ngay</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

