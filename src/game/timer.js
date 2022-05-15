import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Button, SafeAreaView } from 'react-native'
import { lenguages } from '../lenguages/languagesMenu';
import { lengObj } from '../../App';
import { Countdown } from 'react-native-element-timer';
//import { Audio } from 'expo-av';


export default function Timer({ clock }) {


    const [sound, setSound] = useState();
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('../sound/ah.wav')
        );
        setSound(sound);
        await sound.playAsync();
    }
    useEffect(() => {
        return sound ? () => { sound.unloadAsync();
            } : undefined;
    }, [sound]);


    const countdownRef = useRef(null);

    if (clock) {
        if (countdownRef.current) {
           // countdownRef.current.stop();
        }
        return (
            <View style={styles.gameViewTimer}>
                <View style={styles.gameViewCountdown}>
                    <Countdown
                        ref={countdownRef}
                        style={styles.timer}
                        textStyle={styles.timerText}
                        initialSeconds={clock}
                        onTimes={e => { }}
                        onPause={e => { }}
                        onEnd={(e) => { 
                            playSound() 
                        }}
                    />
                </View>
                <View style={styles.gameViewCountdownButton}>

                    <TouchableOpacity
                        style={styles.button1}
                        onPress={() => {
                            countdownRef.current.start();
                        }}
                    ><Text style={styles.countdowncButtonText}>{lenguages.game.timerStart[lengObj.leng]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => {
                            countdownRef.current.stop();
                        }}
                    ><Text style={styles.countdowncButtonText}>{lenguages.game.timerStop[lengObj.leng]}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View></View>
        )
    }
}


const styles = StyleSheet.create({
    gameViewTimer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "90%",
    },
    gameViewCountdown: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        flex: 3,
        height: 110,
        borderRadius: 30,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    gameViewCountdownButton: {
        marginLeft: 10,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 30,
        flex: 2,
        alignItems: 'center',


    },
    timer: {
        marginVertical: 10,
    },
    timerText: {
        fontSize: 50,
        color: 'white',
    },
    button1: {
        //  borderEndColor: 'red',
    },
    countdowncButtonText: {
        color: 'white',
        fontSize: 25,

    },
});