import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native'
import { objGame } from '../lenguages/objgame'
import { lenguages } from '../lenguages/languagesMenu';
import GameRenderName from './GameRenderName'
import { lengObj } from '../../App'
import Timer from './timer'
import { backgroundImages } from '../img/images'


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}



export default function GameRenderQuestion({ setPropsToQuestion, player, name, name2, route}) {

    const [other, truthOrDareOther] = useState(false);
    const [complete, truthOrDareComplete] = useState(false);
    let random;
    let taskText;
    let taskTimer;
    let styleGender;
    let taskTextRaw;
    let backgroundGame;


    switch (player) {

        case 'male':
            styleGender = 'gameButton2';
            backgroundGame = backgroundImages.nameQuestion.backgroundFlirtBoy;
            break;

        case 'female':
            styleGender = 'gameButton1';
            backgroundGame = backgroundImages.nameQuestion.backgroundFlirtGirl;
            break;
    }

    if (complete) {
        return (
            <GameRenderName players={player} route={route}/>
        )
    }

    let maxs = objGame[route.params.gamer.classic.gameMode][route.params.gamer.classic.levelSelectionNowTrue][setPropsToQuestion][player].length - 1;

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand)
    }
    random = randomInteger(0, maxs)
    
    taskTextRaw = objGame[route.params.gamer.classic.gameMode][route.params.gamer.classic.levelSelectionNowTrue][setPropsToQuestion][player][random][route.params.gamer.leng];
    
    if ( typeof taskTextRaw === "object") {
        taskText = name + ', ' + taskTextRaw[0] + ' ' + name2 + taskTextRaw[1]
    } else {
        taskText = name + ', ' + taskTextRaw
    }
    

    taskTimer = objGame[route.params.gamer.classic.gameMode][route.params.gamer.classic.levelSelectionNowTrue][setPropsToQuestion][player][random].timer;

    if (other) {
        random = randomInteger(0, maxs)
        truthOrDareOther(false)
    }




    return (
        <ImageBackground source={backgroundGame} style={styles.gameViewName} imageStyle={{ opacity: 0.1 }} >


            <View style={styles.gameViewTaskTop}>
                <FadeInView>
                    <View style={styles.gameViewTask}>
                        <Text style={styles.playGamerStyle}>{taskText}</Text>
                    </View>
                </FadeInView>
            </View>

            <View style={styles.classicButtonView}>
                <FadeInView style={styles.centerButtonBlock}>
                    <Timer clock={taskTimer} />

                    <TouchableOpacity style={styles[styleGender]} onPress={() => truthOrDareOther(true)}>
                        <Text style={styles.classicButtonText}>{lenguages.game.buttonOther[route.params.gamer.leng]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles[styleGender]} onPress={() => truthOrDareComplete(true)}>
                        <Text style={styles.classicButtonText}>{lenguages.game.buttonComplete[route.params.gamer.leng]}</Text>
                    </TouchableOpacity>

                </FadeInView>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    centerButtonBlock: {
        alignItems: 'center',
    },
    gameViewName: {
        flex: 1,
        resizeMode: 'cover',
    },
    classicButtonView: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 2,
        // width: '100%',
    },
    gameButton1: {
        margin: 20,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#feb8ba',
        width: 250,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    gameButton2: {
        margin: 20,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#feb8ba',
        width: 250,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    classicButtonText: {
        color: '#3c275e',
        fontSize: 22,
        fontFamily: 'mt-medium',
    },
    gameViewTask: {

        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
    },
    playGamerStyle: {
        color: '#3c275e',
        fontSize: 22,
    },
    gameViewTaskTop: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 2,
        // marginLeft: 1,
    },
})