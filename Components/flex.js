import { StatusBar, StyleSheet, Text, View } from "react-native";


export function Flex() {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
            <View style={styles.box}></View>
            </View>
            <Text style={styles.inner}>Container 1</Text>
            <Text style={styles.inner}>Container 2</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        backgroundColor: "gray",
        flex:1,
        //  flexDirection: "row",
        //  justifyContent: "space-between",
        //  alignItems: "center"
    },
    inner:{
        padding: 5,
        backgroundColor: "green",
        flex:1,
    },
    box:{
        backgroundColor:"gray",
        padding: 40,
        margin: 5,
        position: "absolute",
        top: 150,
        right: 200,
        zIndex: 1
    }
})