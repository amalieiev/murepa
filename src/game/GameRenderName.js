import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native'
import { lenguages } from '../lenguages/languagesMenu';
import GameRenderQuestion from './gameRenderQuestion'
//import { lengObj } from '../../App'
import { backgroundImages } from '../img/images'

let playGamer = '';
let playGamer2 = '';
let gender = '';


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


export default function GameRenderTop({ players , route }) {

    let styleGender
    let backgroundGame;


    switch (players) {

        case 'male':
            playGamer = route.params.gamer.femaleName1;
            playGamer2 = route.params.gamer.maleName1;
            gender = 'female';
            styleGender = 'gameButton1';
            backgroundGame = backgroundImages.nameQuestion.backgroundFlirtGirl;
            break;

        case 'female':
            playGamer = route.params.gamer.maleName1;
            playGamer2 = route.params.gamer.femaleName1;
            gender = 'male';
            styleGender = 'gameButton2';
            backgroundGame = backgroundImages.nameQuestion.backgroundFlirtBoy;
            break;

        default:
            playGamer = route.params.gamer.maleName1;
            playGamer2 = route.params.gamer.femaleName1;
            gender = 'male';
            styleGender = 'gameButton2';
            backgroundGame = backgroundImages.nameQuestion.backgroundFlirtBoy;
            break;
    }

    const [clicTruthOrDare, truthOrDare] = useState();

    if (clicTruthOrDare == 'random') {
        function randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand)
        }
        let random = randomInteger(1, 2)

        if (random == 1) {
            truthOrDare('truth')
        } else {
            truthOrDare('dare')
        }
    }

    if (clicTruthOrDare) {
        return (
            <GameRenderQuestion setPropsToQuestion={clicTruthOrDare} player={gender} name={playGamer} name2={playGamer2} route={route}/>
        )
    }

    return (

        <ImageBackground source={backgroundGame} style={styles.gameViewName} imageStyle={{ opacity: 0.1 }} >

            <View style={styles.playStyle}>
                <FadeInView>
                    <Text style={styles.playGamerStyle}>{playGamer}</Text>
                    <Text style={styles.playGamerStyleDown}>{lenguages.game.yourTurn[route.params.gamer.leng]}</Text>
                </FadeInView>
            </View>
            <View style={styles.classicButtonView}>
                <FadeInView>
                    <TouchableOpacity style={styles[styleGender]} onPress={() => truthOrDare('truth')}>
                        <Text style={styles.classicButtonText}>{lenguages.game.buttonQuestion[route.params.gamer.leng]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles[styleGender]} onPress={() => truthOrDare('dare')}>
                        <Text style={styles.classicButtonText}>{lenguages.game.buttonAction[route.params.gamer.leng]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles[styleGender]} onPress={() => truthOrDare('random')}>
                        <Text style={styles.classicButtonText}>{lenguages.game.buttonRandom[route.params.gamer.leng]}</Text>
                    </TouchableOpacity>
                </FadeInView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    gameViewName: {
        flex: 1,
        resizeMode: 'cover',
        //justifyContent: 'space-around',
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
    playGamerStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 70,
        fontFamily: 'mt-medium',
        width: '96%'
    },
    playGamerStyleDown: {
        paddingTop: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'mt-medium',
    },
    playExerciseStyle: {
        textAlign: 'center',
        color: 'red',
        fontSize: 15,
        fontFamily: 'mt-medium',
    },
    classicButtonView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playStyle: {
        justifyContent: "center",
        flex: 2,
    },
})