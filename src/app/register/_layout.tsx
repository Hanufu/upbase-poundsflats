import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as NavigationBar from 'expo-navigation-bar';

export default function RegisterLayout() {

  useEffect(() => {
    const configureNavigationBar = async () => {
      await NavigationBar.setBackgroundColorAsync('#FFFFFF');
    };
    
    configureNavigationBar();
  }, []);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="RegistrationDetail" />
    </Stack>
  );
}
