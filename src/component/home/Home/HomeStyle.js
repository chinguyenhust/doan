import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // bottom: 0,
        // justifyContent: 'flex-end',
        top: 60,
        flexDirection: 'column',
        flex:1,
        backgroundColor:"#fff",
        alignItems: 'stretch',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#fff"
    },
    schedule: {
        flex: 2,
        flexDirection: 'column',
    },
    discover: {
        flex: 2,
        flexDirection: 'column',
        paddingLeft: 10,  
    },
    search: {
        flex: 1,
        alignItems: 'flex-end',
    },
    textHeader: {
        fontSize: 15,
        paddingLeft:5
    },
    line:{
        height:2,
        marginTop:5,
        backgroundColor: "#000"
    },
    iconSearch:{
        color:"#000",
    },
    

});

export default styles
