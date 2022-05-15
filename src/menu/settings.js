import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native'
//import { lenguages } from '../lenguages/languagesMenu';
//import { lengObj } from '../../App'
//import LanguagesSelect from '../lenguages/languagesSelect';
//import App from '../../App'
//import * as Updates from 'expo-updates';
//import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Settings() {

    return (
        <View>
            <Text>настройки</Text>
        </View>
    )



    /*
    const [settingL, settingLenguages] = useState(false);
    if (settingL) {
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('storageLanguagesSelect', '')
            } catch (e) {
                // saving error
            }
        }
        storeData()
        Updates.reloadAsync()
    }

    
    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                // by some browser in the mobile
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);

        return <TouchableOpacity  onPress={handlePress} style={styles.settingButton}>
           <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>;
    };


    return (
        <View style={styles.settingsMain}>

            <TouchableOpacity style={styles.settingButton} onPress={() => settingLenguages(true)}>
                <Text style={styles.textStyle}>{lenguages.settings.lenguages[lengObj.leng]}</Text>
            </TouchableOpacity>

            <OpenURLButton url="https://pages.flycricket.io/plugme/privacy.html" >
                {lenguages.settings.privacy[lengObj.leng]}
            </OpenURLButton>

            <OpenURLButton url="https://play.google.com/store/apps/details?id=vlcxv.apk&hl=ru&ah=JMbEM4Y-MKe6Y2OW1NuSJz7GJGs" >
                {lenguages.settings.feedback[lengObj.leng]}
            </OpenURLButton>

            <TouchableOpacity style={styles.settingButton} >
                <Text style={styles.textStyle}>промокод</Text>
            </TouchableOpacity>
            
            <Text style={styles.textStyle}>{lenguages.settings.version[lengObj.leng]}  1.0.0</Text>
        </View>
    )*/
}

const styles = StyleSheet.create({
    settingsMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        backgroundColor: '#f69b96',
    },
    settingButton: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 15,
        backgroundColor: '#feb8ba',
        //width: '80%',
        alignItems: 'center',

        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
    },
    textStyle: {
        color: '#3c275e',
        fontSize: 18,
    },
    settingButtonPrivacy: {
        color: '#feb8ba',
        fontSize: 18,
    },
})