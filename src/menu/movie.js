import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Pressable, ImageBackground } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown';
import { lenguages } from '../lenguages/languagesMenu';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { backgroundImages } from '../img/images'


let levelSelectionNow = '';

export default function Movie({ navigation, route }) {



  route.params.gamer.movie.gameMode = 'movie';

  let levelSelectionXXX = [];
  levelSelectionXXX.push(lenguages.levelSelection.light[route.params.gamer.leng])
  levelSelectionXXX.push(lenguages.levelSelection.normally[route.params.gamer.leng])

  const [activeClass1, setActiveClass1] = useState('textViewInput');
  const [activeClass2, setActiveClass2] = useState('textViewInput');

  let maleName1 = ''
  let femaleName1 = ''
  let selectlevel = 0
  let backgroundImg = backgroundImages.movie.backgroundXXXErotic

  if (route.params.gamer) {
    if (route.params.gamer.maleName1) {
      maleName1 = route.params.gamer.maleName1;
    }
    if (route.params.gamer.femaleName1) {
      femaleName1 = route.params.gamer.femaleName1;
    }
    if (route.params.gamer.movie.selectDropdownlevel) {
      selectlevel = route.params.gamer.movie.selectDropdownlevel;
    }

    switch (route.params.gamer.movie.levelSelectionNowTrue) {

      case 'light':
        backgroundImg = backgroundImages.movie.backgroundXXXErotic;
        break;

      case 'normally':
        backgroundImg = backgroundImages.movie.backgroundXXXPorn;
        break;
    }

  }


  const [text1, setValue1] = useState(maleName1);
  const [text2, setValue2] = useState(femaleName1);
  const [backgroundImg1, backgroundImg2] = useState(backgroundImg);

  const onChange1 = (text1) => {
    setValue1(text1);
    setActiveClass1('textViewInput');
  };
  const onChange2 = (text2) => {
    setValue2(text2);
    setActiveClass2('textViewInput');
  };

  const [clickedGame, setClickedGame] = useState(false);





  if (clickedGame) {
    if (text1 && text2) {
      route.params.gamer.maleName1 = text1;
      route.params.gamer.femaleName1 = text2;
      setClickedGame(false);
      setActiveClass1('textViewInput');
      setActiveClass2('textViewInput');


      switch (levelSelectionNow) {

        case 'ЭРОТИКА':
        case 'EROTIC':
          route.params.gamer.movie.levelSelectionNowTrue = 'light';
          route.params.gamer.movie.selectDropdownlevel = 0;
          break;

        case 'XXX КИНО':
        case 'XXX MOVIES':
          route.params.gamer.movie.levelSelectionNowTrue = 'normally';
          route.params.gamer.movie.selectDropdownlevel = 1;
          break;

      }


      // if (JSON.stringify(objGameNameLevel) !== JSON.stringify(route.params.gamer)) {
      route.params.gamer.dataNotRecorded = {};
      const storeDataName = async (value) => {
        try {
          //   await AsyncStorage.removeItem('objGameStore')
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('objGameStore', jsonValue)
        } catch (e) {
          // saving error
        }
      }
      storeDataName(route.params.gamer)
      //   }
      route.params.gamer.dataNotRecorded.levelSelectionNow = levelSelectionNow;
      //не записываем в стореж dataNotRecorded но прокидываем через пропсы



      
      navigation.navigate('Game');
    } else {
      setActiveClass1('textViewInputErr');
      setActiveClass2('textViewInputErr');
      setClickedGame(false);
    }
  }

  return (

    <View style={styles.classicMain}>
      <ImageBackground source={backgroundImg1} style={styles.image} imageStyle={{ opacity: 0.1 }} >

        <View style={styles.classicHeaderView}>
          <Text style={styles.classicHeader}>{lenguages.movie.nameTitle[route.params.gamer.leng]}</Text>
        </View>

        <View>

          <View>
            <View style={styles[activeClass1]}>
              <TextInput style={styles.textInput} value={text1} onChangeText={onChange1} maxLength={10} placeholder={lenguages.FormName.male[route.params.gamer.leng]} />
            </View>
            <View style={styles[activeClass2]}>
              <TextInput style={styles.textInput} value={text2} onChangeText={onChange2} maxLength={10} placeholder={lenguages.FormName.female[route.params.gamer.leng]} />
            </View>
          </View>

          <SelectDropdown
            style={styles.styleLevelSelection}
            data={levelSelectionXXX}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownStyle={styles.dropdownStyle}
            rowTextStyle={styles.rowTextStyle}
            //defaultButtonText={'уровень сложности'}
            defaultValueByIndex={selectlevel}
            onSelect={(selectedItem, index) => {

              switch (index) {
                case 0:
                  backgroundImg2(backgroundImages.movie.backgroundXXXErotic);
                  break;

                case 1:
                  backgroundImg2(backgroundImages.movie.backgroundXXXPorn);
                  break;

              }


            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              levelSelectionNow = selectedItem;
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;

            }}

          />
        </View>

        <View>
          <Text style={styles.classicTitle}>{lenguages.movie.movieTitle[route.params.gamer.leng]}</Text>
        </View>
        <View style={styles.classicButtonView}>
          <Pressable style={styles.classicButton} onPress={() => setClickedGame(true)}>
            <Text style={styles.classicButtonText}>{lenguages.movie.button[route.params.gamer.leng]}</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  classicMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: '#f69b96',
  },
  classicHeader: {
    color: 'white',
    fontSize: 27,
    fontFamily: 'mt-bold',
    textAlign: 'center',
    //paddingTop: 50,
  },
  classicTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    fontSize: 20,
    fontFamily: 'mt-medium',
    textAlign: 'center',
  },

  classicButton: {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: '#feb8ba',
    width: 250,
    shadowColor: "#000",
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
  textInput: {
    fontSize: 24,
    fontFamily: 'mt-medium',
    textAlign: 'center',
    color: 'white',
  },
  textViewInput: {
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomWidth: 1,
    width: 200,
    marginBottom: 30,
  },
  textViewInputErr: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    width: 200,
    marginBottom: 30,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  dropdown1BtnStyle: {
    width: 200,
    height: 55,
    backgroundColor: "#rgba(255, 255, 255, 0.4)",
    borderRadius: 15,
  },
  dropdown1BtnTxtStyle: {
    color: 'white',
    fontFamily: 'mt-medium',
  },
  styleLevelSelection: {
  },
  classicHeaderView: {
    //paddingTop: '20%',
  },
  classicButtonView: {
    //paddingBottom: '20%',
  },
  dropdownStyle: {
    borderRadius: 15,
    backgroundColor: "#feb8ba",
  },
  rowTextStyle: {
    color: 'white',
  },


})