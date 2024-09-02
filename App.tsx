import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [bgColor, setbgColor] = useState("#fffffff");

  const generateColor = () => {
    let hexRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {

      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setbgColor(color)
  }

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <View style={styles.Btn}>
          <Button
            title="Press Me :"
            onPress={generateColor}
            color="#000000"


          />
        </View>
        <View style={styles.codeCard}>
          <Text style={styles.headingCode}>Color Code is:</Text>
          <Text selectable style={styles.copyCard}>(Long press to Copy)</Text>
          <Text selectable style={styles.codeText}>{bgColor}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Btn: {
    height: 50,
    width: 150,
    //backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingTop: 10
  },
  BtnText: {
    color: "#000000",
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 5,
    fontWeight: "bold"
  },
  codeCard: {
    height: 150,
    width: 200,
    backgroundColor: "#ffffff",
    marginTop: 20,
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  headingCode: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold"

  },
  copyCard: {
    fontSize: 15,
    color: "#7B8788"
  },
  codeText: {
    marginTop: 20,
    fontSize: 20,
    color: "#000000"
  }
})