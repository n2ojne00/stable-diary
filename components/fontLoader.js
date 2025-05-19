import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  useFonts,
  NotoSansDisplay_400Regular,
  NotoSansDisplay_400Regular_Italic,
} from '@expo-google-fonts/noto-sans-display';

export default function FontLoader({ children }) {
  const [fontsLoaded] = useFonts({
    NotoSansDisplay_400Regular,
    NotoSansDisplay_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return children;
}
