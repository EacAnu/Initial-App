import { FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { domb } from "../Data/earlycode";


export function Course() {
    return (
        <View style={styles.container}>
            <FlatList data={domb}
                key={({ domb }) => { domb.id }} renderItem={({ item }) => {
                  return (
                        <View style={styles.box}>
                            <View style={styles.profile}>
                                <Text style={styles.userName}>{item.EarlyCodeCourse}</Text>
                            </View>
                            <Image source={{ uri: item.EarlyCodeCourse }} style={{ width: "100%", height: 200, borderRadius: 5 }} />
                            <Text style={styles.productName}>{item.CourseNum}</Text>

                            <View style={styles.body}>
                                <Text style={styles.price}>₦{item.Amount}</Text>
                                <Text style={styles.location}>Description: {item.Description}</Text>
                            </View>
                            
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

    },
})