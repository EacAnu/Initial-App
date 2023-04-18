import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export const product = [
    {
        userName: "Micheal Jobs",
        productImg: "https://images.pexels.com/photos/265720/pexels-photo-265720.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "485,000",
        productName: "White wedding gown",
        location: "Abuja",
    },
    {
        userName: "John Hillton",
        productImg: "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "7,980,000",
        productName: "GWagon",
        location: "Lagos",
    },
    {
        userName: "Willo James",
        productImg: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "19,980,000",
        productName: "4 Bedroom flat",
        location: "Abuja",
    },
    {
        userName: "Alom Wiko",
        productImg: "https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "6,300,000",
        productName: "Gray Mercedes-benz Convertible",
        location: "Abuja",
    },
]
const Product = () => {
    const navigation = useNavigation();
    const [refreshing,setRefreshing] = useState(false)
    const handleRefresh = ()=>{
        setRefreshing(!refreshing);
        navigation.reset({index: 0, routes:[{name: "Home"}]})
    }

    const LeftContent = props => <Avatar.Icon {...props} icon="account" />
    return (
        <View style={styles.container}>
            <FlatList data={product} s renderItem={({ item }) => {
                return (
                    <Card style={styles.card}>
                        <Card.Title title={item.userName} left={LeftContent} />
                        <Card.Cover source={{ uri: item.productImg }} />
                        <Card.Content>
                            <Title>{item.productName}</Title>
                            <View style={styles.paragraph}>
                                <Paragraph>{item.location}</Paragraph>
                                <Paragraph style={styles.price}>₦{item.price}</Paragraph>
                            </View>
                        </Card.Content>
                    </Card>
                )
            }} key={({ item }) => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
            />
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    card: {
        borderRadius: 10,
        marginBottom: 10
    },
    paragraph:{
        flexDirection:"row",
        justifyContent:'space-between',
    },
    price:{
        color:'green',
        fontWeight:'bold'
    }
})