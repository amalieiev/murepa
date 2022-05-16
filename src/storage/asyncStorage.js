import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStack from '../../navigate';
import LanguagesSelect from '../menu/languagesSelect'




export default function AsyncStorageGetItem({ gamer }) {


  const [ storage , setStorage ] = useState (gamer);


  useEffect( async () => {
    debugger
    try {
      const jsonValue = await AsyncStorage.getItem('objGameStore')
      const value = jsonValue  ? JSON.parse(jsonValue) : null;
      debugger
      setStorage (value)

      debugger
    } catch (e) {
      // error reading value
    }
  }, []);

  debugger

 return storage.leng ? <MainStack gamer={storage} /> : <LanguagesSelect gamer={storage} /> ;


}