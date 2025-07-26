import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  useFonts,
  NotoSansDisplay_400Regular,
  NotoSansDisplay_400Regular_Italic,
} from '@expo-google-fonts/noto-sans-display';
import LoadingScreen from './loading';

export default function FontLoader({ children }) {
  const [fontsLoaded] = useFonts({
    NotoSansDisplay_400Regular,
    NotoSansDisplay_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return children;
}
