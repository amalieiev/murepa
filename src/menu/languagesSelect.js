import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { backgroundImages } from '../img/images'
import MainStack from '../../navigate';
//import App from '../../App'
import AsyncStorage from '@react-native-async-storage/async-storage';

//const backgroundLeng = require('../img/leng1080.png')

export default function LanguagesSelect({ gamer }) {



  const [clickedEng, setClickedEng] = useState(false);
  const [clickedRus, setClickedRus] = useState(false);

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(gamer)
      await AsyncStorage.setItem('objGameStore', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  
  if (clickedEng) {
    
    gamer.leng = 'en'
    storeData()
    return (
      <MainStack gamer={gamer} />
    );
  }
  if (clickedRus) {
    
    gamer.leng = 'ru'
    storeData()
    return (
      <MainStack gamer={gamer} />
    );
  }


  return (
    <View style={styles.langView}>
      <ImageBackground source={backgroundImages.languagesSelect.backgroundClassicLanguagesSelect} style={styles.image}>
        <Pressable style={styles.langButtonEng} onPress={() => setClickedEng(true)}>
          <Text style={styles.langButtonEngText}>ENGLISH</Text>
        </Pressable>
        <Pressable style={styles.langButtonRus} onPress={() => setClickedRus(true)}>
          <Text style={styles.langButtonRusText}>РУССКИЙ</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  langView: {
    flex: 1,
    backgroundColor: "#f69b96",//фоновый цвет всего приложения

  },

  langButtonEng: {
    alignItems: 'center',
    paddingVertical: 40,
    // borderRadius: 30,
    backgroundColor: 'white',
    width: '60%',
    // marginBottom: 40,
    opacity: 0,
  },

  langButtonEngText: {
    color: 'blue',
    fontSize: 22,
    fontFamily: 'mt-medium',
  },

  langButtonRus: {
    alignItems: 'center',
    paddingVertical: 40,
    // borderRadius: 30,
    backgroundColor: 'white',
    width: '60%',
    opacity: 0,
  },

  langButtonRusText: {
    color: 'blue',
    fontSize: 22,
    fontFamily: 'mt-medium',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: "center",
    opacity: 0.7
  },
});


