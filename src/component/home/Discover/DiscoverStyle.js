import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        flexDirection: 'column',
        backgroundColor: "#fff",
        paddingBottom:20,
    },
    title: {
        fontSize: 22,
        height: 30,
        alignSelf: "stretch",
    },
    place: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 7,
        height: 60,
        alignSelf: "stretch",
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,     
    },
    buttonCreat: {
        marginTop: 20,
        backgroundColor: '#f90606',
        borderRadius: 7,
        height: 50,
        alignSelf: "stretch",
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3, 
        alignItems: 'center',  
    }



});

export default styles
