import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        flex: 1,
        paddingTop: 10,
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
    content: {
        alignSelf: "stretch",
        flex: 1,
        flexDirection: 'column',
    },
    item: {
        alignSelf: "stretch",
        height: 80,
        flexDirection: 'row',
    },
    icon: {
        width: "15%",
        justifyContent: "center",
        paddingLeft: 10

    },
    location: {
        width: "85%",
        flexDirection: "column",
        alignSelf: "center",
        height: 80,
        paddingTop:15

    },
    startDate: {
        flexDirection: "column",
        width: "50%"
    },
    lable: {
        height: 25,
        color: "#a9a9a9",
        fontSize: 14,
        
    },
    name: {
        height: 39,
        fontSize: 16,
        
    },
    line: {
        height:1,
        bottom: 0,
        backgroundColor:"#000",
    },
    buttonNext: {
        height: 40,
        backgroundColor: '#f90606',
        borderRadius: 7,
        alignSelf: "stretch",
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3, 
        alignItems: 'center', 
        marginLeft:20,
        marginRight: 20,
        bottom: 40,
    }

    
});

export default styles
