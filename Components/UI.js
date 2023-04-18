
import React, { useState } from 'react'
import { StyleSheet, View, Text as P } from 'react-native'
import { Avatar, Button, Card, Text, } from 'react-native-paper'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export function UI() {
    const [boolian, setBoolean] = useState(false)
    return (
        <View styles={styles.container}>
            <Text variant='displaySmall'>React Native paper</Text>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button loading={true}>Cancel</Button>
                    <Button loading={boolian} onPress={() => setBoolean(true,false)}>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})