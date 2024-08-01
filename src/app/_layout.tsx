import React, { useEffect } from 'react';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import { 
    Jura_300Light,
    Jura_400Regular,
    Jura_500Medium,
    Jura_600SemiBold,
    Jura_700Bold
} from '@expo-google-fonts/jura';

SplashScreen.preventAutoHideAsync();

export default function _layout() {

    const [fontsLoaded] = useFonts({
        Jura_300Light,
        Jura_400Regular,
        Jura_500Medium,
        Jura_600SemiBold,
        Jura_700Bold,
      });
    
      useEffect(() => {
        const prepareApp = async () => {
          if (fontsLoaded) {
            await SplashScreen.hideAsync();
          }
          await NavigationBar.setBackgroundColorAsync('#7B2CBF');
        };
    
        prepareApp();
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null; 
      }

    return (
        <Tabs 
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
            backgroundColor: '#7B2CBF',
            height: 80,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingHorizontal: 24,
            paddingVertical: 16,
            },
            tabBarIcon: ({ focused, color, size }) => {
            let IconComponent;
            let iconName;

            switch (route.name) {
                case 'index':
                IconComponent = FontAwesome5;
                iconName = 'hotel';
                break;
                case '(tabs)/Table':
                IconComponent = FontAwesome6;
                iconName = 'table-list';
                break;
                case '(tabs)/Profile':
                IconComponent = Ionicons;
                iconName = 'person-outline';
                break;
                case '(tabs)/Calendar':
                IconComponent = FontAwesome;
                iconName = 'calendar';
                break;
                default:
                IconComponent = MaterialIcons;
                iconName = 'disabled-by-default';
                break;
            }

            return <IconComponent name={iconName} size={32} color={focused ? '#FFFFFF' : '#0000003D'} />;
            },
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#0000003D',
        })}
        >
            <Tabs.Screen name='index' />
            <Tabs.Screen name='(tabs)/Calendar' />
            <Tabs.Screen name='(tabs)/Table' />
            <Tabs.Screen name='(tabs)/Profile' />
            
        </Tabs>
    )
}