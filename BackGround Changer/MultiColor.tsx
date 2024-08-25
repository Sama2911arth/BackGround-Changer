import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

    const [bg1Color, set1bgColor] = useState("#fffffff");
    const [bg2Color, set2bgColor] = useState("#fffffff");

    const generateColor = () => {
        let hexRange = "0123456789ABCDEF";
        let color1 = "#";
        let color2 = "#";

        for (let i = 0; i < 6; i++) {

            color1 += hexRange[Math.floor(Math.random() * 16)]
            color2 += hexRange[Math.floor(Math.random() * 16)]
        }
        set1bgColor(color1)
        set2bgColor(color2)
    }

    return (
        <>
            {/* // <StatusBar backgroundColor={bg1Color} /> */}
            <View style={[styles.codeCard, { backgroundColor: bg1Color }]}>
                <Text style={styles.headingCode}>Color Code is:</Text>
                <Text selectable style={styles.copyCard}>(Long press to Copy)</Text>
                <Text selectable style={styles.codeText}>{bg1Color}</Text>
            </View>
            <View style={[styles.codeCard, { backgroundColor: bg2Color }]}>
                <Text style={styles.headingCode}>Color Code is:</Text>
                <Text selectable style={styles.copyCard}>(Long press to Copy)</Text>
                <Text selectable style={styles.codeText}>{bg2Color}</Text>
            </View>
            <View style={styles.Btn}>
                <Button
                    title="Press Me :"
                    onPress={generateColor}
                    color="#000000"


                />
            </View>
            {/* <View style={styles.codeCard}>
        <Text style={styles.headingCode}>Color Code is:</Text>
        <Text selectable style={styles.copyCard}>(Long press to Copy)</Text>
        <Text selectable style={styles.codeText}>{bgColor}</Text>
      </View> */}

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    colorCard: {
        height: 150,
        width: 200,
        // backgroundColor: "#ffffff",
        marginTop: 20,
        // flex: 0.25,
        // alignItems: "center",
        // justifyContent: "center",
        borderRadius: 20
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
        height: 200,
        width: 200,
        backgroundColor: "#ffffff",
        marginTop: 20,
        flex: 0.25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginHorizontal: 20
    },

    headingCode: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold"

    }, copyCard: {
        fontSize: 15,
        color: "#7B8788"
    },
    codeText: {
        marginTop: 20,
        fontSize: 20,
        color: "#000000"
    }
})