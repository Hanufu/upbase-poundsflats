import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Jura_300Light, Jura_400Regular, Jura_500Medium, Jura_600SemiBold, Jura_700Bold } from '@expo-google-fonts/jura';
import * as NavigationBar from 'expo-navigation-bar';
import Home from './index';
import Table from './Table';
import Profile from './Profile';
import Calendar from './Calendar';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const [fontsLoaded] = useFonts({
    Jura_300Light,
    Jura_400Regular,
    Jura_500Medium,
    Jura_600SemiBold,
    Jura_700Bold,
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    const setNavigationBarColor = async () => {
      await NavigationBar.setBackgroundColorAsync('#7B2CBF');
    };

    SplashScreen.preventAutoHideAsync();
    hideSplashScreen();
    setNavigationBarColor();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#7B2CBF',
          height: 80,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;
          let iconName;

          switch (route.name) {
            case 'Home':
              IconComponent = FontAwesome5;
              iconName = 'hotel';
              break;
            case 'Table':
              IconComponent = FontAwesome;
              iconName = 'table';
              break;
            case 'Profile':
              IconComponent = Ionicons;
              iconName = 'person-outline';
              break;
            case 'Calendar':
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
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Calendar' component={Calendar} />
      <Tab.Screen name='Table' component={Table} />
      <Tab.Screen name='Profile' component={Profile} />
      
    </Tab.Navigator>
  );
}
