import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        paddingTop: 40,
        flexDirection: 'column',
        backgroundColor: "#fff",
        paddingBottom: 20,
        position: "absolute",
        left: 0,
        right: 0
    },
    tapbar: {
        height: 40,
        flexDirection:"row",
        backgroundColor: "green"
    },
    tapbarItem: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    lableBefore: {
        fontSize: 18,
        color: "#fff"
    },
    lableAfter: {
        fontSize: 18,
        color: "#000"
    }
});

export default styles
