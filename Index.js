import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export function Index() {
  const [state, setstate] = useState()
  const [userName, setUsername] = useState("")

  useEffect(() => {
    setstate()
    setUsername("");
  }, [])



  return (
    <View style={styles.container}>
      <Text style={styles.header}>My composition</Text>
      <View style={styles.innsercontainer}>
        <Image source={require("./assets/pan.png")} style={styles.baCon}/>
        <Text style={styles.baCon}>Coffee</Text>
        <View style={styles.glassCup}>
        <View style={styles.innsercontainer}>
            <Image source={require("./assets/wine-bottle.png")} style={styles.baCon}/>
            <Text style={styles.baCon}>Wines</Text>

        </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0616fc1d',
    marginTop:30,
    padding:10,
  },
  header: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  glassCup: {
    backgroundColor: "#964B00",
    marginTop:30,
    padding:10,
  },
  baCon: {
    marginTop: StatusBar.currentHeight,
        backgroundColor: "gray",
        flex:1,
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center"
  }
});
