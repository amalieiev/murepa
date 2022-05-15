import React from 'react';
import type { Node } from 'react';
import { Text, View, } from 'react-native';
import {
  Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainStack from './navigate';
//import gamerOb from './src/gamer';

import LanguagesSelect from './src/menu/languagesSelect'
import AsyncStorageGetItem from './src/storage/asyncStorage'

const gamerOb = {
  leng: '',

  maleName1: '',
  femaleName1: '',

  tap: '',

  classic: {
    levelSelectionNowTrue: '',
    selectDropdownlevel: 0,
    gameMode: '',
  },

  movie: {
    levelSelectionNowTrue: '',
    gameMode: '',
    selectDropdownlevel: 0,
  },

  dataNotRecorded: {

  },
}


const App: () => Node = () => {

  debugger
  return (
    
    <AsyncStorageGetItem gamer={gamerOb} />

  )

};



export default App;
