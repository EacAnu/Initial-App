import { Alert, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { product } from "../Data/data";


export function Product() {
    return (
        <View style={styles.container}>
            <FlatList data={product}
                key={({ item }) => { item.productImg }} renderItem={({ item }) => {
                    return (
                        <View style={styles.box}>
                            <View style={styles.profile}>
                                <Image source={{ uri: item.productImg }} style={{ width: 35, height: 35, borderRadius: 40 }} />
                                <Text style={styles.userName}>{item.userName}</Text>
                            </View>
                            <Image source={{ uri: item.productImg }} style={{ width: "100%", height: 200, borderRadius: 5 }} />
                            <Text style={styles.productName}>{item.productName}</Text>

                            <View style={styles.body}>
                                <Text style={styles.price}>₦{item.price}</Text>
                                <Text style={styles.location}>Location: {item.location}</Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor:"#0c7b02", padding: 5, borderRadius: 10}}
                            onPress={()=> {
                              Alert.alert(
                                "Phone Call!!",
                                "Are you sure you want to call " + item.userName,
                                [
                                    { text: "Yes", onPress: () => Alert.alert("Status", `${item.userName}'s number has been sent to your dial pad`)},
                                
                                    {text: "NO", onPress: () => console.log("Phone call cancelled")},
                                ]
                              )
                            }}
                            >
                                <Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}>Call {item.userName}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    box: {
        margin: 10,
        backgroundColor: '#0000000f',
        padding: 10,
        borderRadius: 10
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    userName: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#000000b3",
        marginLeft: 5
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 17,
        margin: 5
    },
    body: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    price: {
        color: "#278403",
        fontWeight: "bold"

    }
})