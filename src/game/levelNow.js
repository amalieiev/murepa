import React, { useState, } from "react";
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native'
//import { levelSelectionNow } from '../menu/classic'



export default function LevelNow({ route }) {

    return (
        <View style={styles.levelSelection}>
            <Text style={styles.levelSelectionText}> {route.params.gamer.dataNotRecorded.levelSelectionNow}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    levelSelection: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15,
    },
    levelSelectionText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'mt-medium',
    }
})