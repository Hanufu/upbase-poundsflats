import { Slot } from 'expo-router';
import { useFonts, Jura_400Regular, Jura_700Bold, Jura_300Light, Jura_500Medium } from '@expo-google-fonts/jura';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Jura_300Light,
    Jura_400Regular,
    Jura_500Medium,
    Jura_700Bold,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise((resolve) => {
          if (fontsLoaded) {
            resolve(true);
          }
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return <Slot />;
}
