import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { lenguages } from '../lenguages/languagesMenu';
//import { lengObj } from '../App';
//import { Ionicons } from '@expo/vector-icons';



export default function MainMenu({ navigation, route }) {

debugger
  return (

    
    <View style={styles.mainMenu}>
        <StatusBar
        //animated={true}
        backgroundColor="#f69b96"
        />

      <View style={styles.memuSettings}>
        <TouchableOpacity style={styles.memuSettingsButten} onPress={() => navigation.navigate('Settings')}>
        <Text>setings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainMenuCenter}>

        <View style={styles.memuString1}>
          <TouchableOpacity style={styles.memuButten1} onPress={() => navigation.navigate('ClassicMemu')}>
            <ImageBackground style={styles.butten1}  source={require('../img/classicMenu.png')} imageStyle={{ opacity: 0.8, borderRadius: 30 }}></ImageBackground>
            <Text style={styles.text}>
              {lenguages.mainMenu.classic[route.params.gamer.leng]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memuButten1} onPress={() => navigation.navigate('Movie')}>
            <ImageBackground style={styles.butten1} source={require('../img/xxxMenu.png')} imageStyle={{ opacity: 0.8, borderRadius: 30 }}></ImageBackground>
            <Text style={styles.text}>
              {lenguages.mainMenu.movie[route.params.gamer.leng]}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.memuString2}>
          <TouchableOpacity style={styles.memuButten1} onPress={() => navigation.navigate('swing')}>
          <ImageBackground style={styles.butten1} source={require('../img/soon.png')} imageStyle={{ opacity: 0.8, borderRadius: 30 }}></ImageBackground>
            <Text style={styles.text}>
              {lenguages.mainMenu.swing[route.params.gamer.leng]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memuButten1} onPress={() => navigation.navigate('bdsm')}>
          <ImageBackground style={styles.butten1} source={require('../img/soon.png')} imageStyle={{ opacity: 0.8, borderRadius: 30 }}></ImageBackground>
            <Text style={styles.text}>
              {lenguages.mainMenu.bdsm[route.params.gamer.leng]}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.memuString3}>
          <TouchableOpacity style={styles.memuButten1} onPress={() => navigation.navigate('ff')}>
          <ImageBackground style={styles.butten1} source={require('../img/soon.png')} imageStyle={{ opacity: 0.8, borderRadius: 30 }}></ImageBackground>
            <Text style={styles.text}>
              {lenguages.mainMenu.ff[route.params.gamer.leng]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.memuButten1} onPress={() => navigation.navigate('task')}>
          <ImageBackground style={styles.butten1} source={require('../img/soon.png')} imageStyle={{ opacity: 0.8, borderRadius: 30 }}></ImageBackground>
            <Text style={styles.text}>
              {lenguages.mainMenu.task[route.params.gamer.leng]}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({



  mainMenu: {
    flex: 1,
    backgroundColor: '#f69b96',
  },

  mainMenuCenter: {
    flex: 1,
    justifyContent: 'center'
  },

  memuString1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50
  },
  memuButten1: {
    width: 135,
  },

  butten1: {
    resizeMode: 'cover',
   // justifyContent: 'center',
   // alignItems: "center",
    height: 130,
    width: 130,
    backgroundColor: '#feb8ba',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },



  memuString2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50
  },

  memuString3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50
  },

  text: {
    paddingTop: 15,
    textAlign: "center",
    color: 'white',
    fontSize: 18,
    fontFamily: 'mt-medium'
  },

  memuSettings: {
    flexDirection: 'row-reverse',
  },
  memuSettingsButten: {
    backgroundColor: '#feb8ba',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 5,
    shadowOffset: {
      width: 0,
      height: 8,
  },
  shadowOpacity: 0.44,
  shadowRadius: 8.32,
  elevation: 16,
  },
 
})
