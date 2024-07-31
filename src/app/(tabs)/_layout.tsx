import React, { useCallback, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  useFonts,
  Jura_300Light,
  Jura_400Regular,
  Jura_500Medium,
  Jura_600SemiBold,
  Jura_700Bold,
} from '@expo-google-fonts/jura';

import Table from './Table';
import Profile from './Profile';
import Calendar from './Calendar';
import Home from './index';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          Jura_300Light,
          Jura_400Regular,
          Jura_500Medium,
          Jura_600SemiBold,
          Jura_700Bold,
        });
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        
        SplashScreen.hideAsync();
      }
    }

    SplashScreen.preventAutoHideAsync();
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{ 
        headerShown: false,
      }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name="Table" component={Table} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
}