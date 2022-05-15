import * as React from 'react';
import LanguagesSelect from './src/menu/languagesSelect';
import MainMenu from './src/menu/mainMenu';
import ClassicMemu from './src/menu/classic';
import Task from './src/menu/task';
import BDSM from './src/menu/bdsm';
import SWING from './src/menu/swing';
import Movie from './src/menu/movie';
import FF from './src/menu/ff';
import Settings from './src/menu/settings';
import Game from './src/game/game';

import { lenguages } from './src/lenguages/languagesMenu';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export default function Navigate(gamer) {

  debugger
    return <NavigationContainer>
        <Stack.Navigator>



            <Stack.Screen
                name="MainMenu"
                component={MainMenu}
                initialParams={ gamer }
                options={{
                    title: 'PlugMe', headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />


            <Stack.Screen
                name="ClassicMemu"
                component={ClassicMemu}
                initialParams={gamer}
                options={{
                    title: lenguages.mainMenu.classic[gamer.leng], headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="task"
                component={Task}
                initialParams={gamer}
                options={{
                    title: lenguages.mainMenu.task[gamer.leng], headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />


            <Stack.Screen
                name="bdsm"
                component={BDSM}
                initialParams={ gamer }
                options={{
                    title: lenguages.mainMenu.bdsm[gamer.leng], headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="swing"
                component={SWING}
                initialParams={ gamer }
                options={{
                    title: lenguages.mainMenu.swing[gamer.leng], headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />


            <Stack.Screen
                name="Movie"
                component={Movie}
                initialParams={gamer}
                options={{
                    title: lenguages.mainMenu.movie[gamer.leng], headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="ff"
                component={FF}
                initialParams={ gamer }
                options={{
                    title: lenguages.mainMenu.ff[gamer.leng], headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Settings"
                component={Settings}
                initialParams={ gamer }
                options={{
                    title: lenguages.mainMenu.settings[gamer.leng], headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Game"
                component={Game}
                initialParams={gamer}
                options={{
                    title: lenguages.mainMenu.classicGame[gamer.leng], headerStyle: {
                        backgroundColor: '#f69b96',
                    }, headerTintColor: '#fff',
                }}
            />



        </Stack.Navigator>
    </NavigationContainer>;
}