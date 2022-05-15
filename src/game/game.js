import React from "react";
import { View, StyleSheet, } from 'react-native'
import GameRenderName from './GameRenderName';
import LevelNow from './levelNow'


export default function Game({ route }) {
    return (

        <View style={styles.gameView}>
            <LevelNow route={route}/>
            <GameRenderName route={route}/>
        </View>
    )
}



const styles = StyleSheet.create({
    gameView: {
        flex: 1,
        backgroundColor: '#f69b96',
        // alignItems: 'center',
    },
})