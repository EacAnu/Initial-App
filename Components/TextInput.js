import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export function TextInputs() {
    const [Number, setNumber] = useState(0);
    console.log(StatusBar.currentHeight);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Enter Kilogram'
                onChangeText={(text)   => { setNumber(Number(text))  }}
            />
            <Text>{Number} + {Number} = {Number + Number}</Text>
            <TouchableOpacity onPress={() => { setNumber(Number + 1) }}>
                <Text style={{  backgroundColor: "gray", padding: 10, textAlign: "center", color: "white", borderRadius: 10}}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: StatusBar.currentHeight,
    },
    input: {
        borderRadius: 10,
        borderColor: "#c300ff",
        borderWidth: 1,
        padding: 8,
        fontSize: 16,
        fontWeight: "bold"
    }
})