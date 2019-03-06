import React, { Component } from 'react';
import { Platform, TextInput, Text, View, FlatList, TouchableOpacity, TabBarIOS } from 'react-native';
import styles from "./PlanStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/Entypo';
import { SearchableFlatList } from "react-native-searchable-list";
import { Data } from "../../../api/Data";
import Demo from "../Demo";
import PlanDay from "../PlanDay"


export default class TapbarIOS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'welcome'
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "column" }}>
                    <TouchableOpacity style={{ height: 30, marginTop: 40, flexDirection: "row" }}>
                        <Icon name="ios-arrow-round-back" size={34} style={{ width: "15%" }} onPress={() => { this.props.navigation.goBack() }} />
                        <Text style={{ fontSize: 24 }}>Kế hoạch hằng ngày</Text>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: "#000", height: 1, marginTop: 5 }}></View>
                </View>
                
                <TabBarIOS selectedTab={this.state.selectedTab} style={{alignItems:"flex-start"}}>
                    <TabBarIOS.Item
                        selected={this.state.selectedTab === 'welcome'}
                        title="A"
                        onPress={() => {
                            this.setState({
                                selectedTab: 'welcome',
                            });
                        }}>
                        <Demo />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        selected={this.state.selectedTab === 'more'}
                        title="B"
                        onPress={() => {
                            this.setState({
                                selectedTab: 'more',
                            });
                        }}>
                        <PlanDay />
                    </TabBarIOS.Item>
                </TabBarIOS>
               

            </View>
        );
    }
}

