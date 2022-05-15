import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStack from '../../navigate';
import LanguagesSelect from '../menu/languagesSelect'




export default function AsyncStorageGetItem({ gamer }) {

  let storage

  const getDataName = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('objGameStore')
      storage = jsonValue != null ? JSON.parse(jsonValue) : null;


      if (storage) {
        gamer = storage
        return <LanguagesSelect gamer={gamer} />

      } else {
        return <MainStack gamer={gamer} />
      }
    } catch (e) {
      // error reading value
    }

  }

  getDataName()


}