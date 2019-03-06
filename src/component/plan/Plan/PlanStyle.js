import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
    item: {
        height: 55,
        flexDirection: "row",
        
    },
    info: {
        flexDirection: "column",
        width: "90%",
        paddingLeft:10,
    },
    textName: {
        height:25,
        fontSize:16,
    },
    textDescription: {
        height:25,
        fontSize:14,
        color: "#a9a9a9"
    },
    line:{
        height:1,
        backgroundColor:"#000",
       
    }
});

export default styles
