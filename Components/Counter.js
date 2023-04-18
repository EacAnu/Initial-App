import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Counter App</Text>
            <Text style={styles.count}>{count}</Text>
            <View style={{ margin: 10}}>
            <Button
            title="Add"
            color="green"
            onPress={()=> { setCount(count + 1) }}
            />
            <View style={styles.container}>
                <View style={{ margin: 10}}>
                    <Button
                    title="Subtract"
                    color="red"
                    onPress={()=> { setCount(count - 1)  }}
                    />
                    <View style={styles.container}>
                    <View style={{ margin: 10}}>
                    <Button
                    title="Reset Number"
                    color="#FFA500"
                    onPress={()=> { setCount(count - count)}}
                    />
                    </View>
                    </View>
                </View>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop:30,
      padding:10,
    },
    header: {
      color: "green",
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
    },
    count: {
        fontSize:50,
        fontWeight:"bold",
        backgroundColor:"#00000028",
        borderRadius:10,
        padding:10,
        marginTop:10,
    }
  });