import { StyleSheet, Text, View } from 'react-native';
import TestStyles from './pages/style-test';
import FontLoader from './components/fontLoader';
import BackgroundImage from './components/bgImage';
import base from './styles/base';
import DrawerNavigator from './navigation/AppNavigation';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppHeader from './navigation/AppHeader';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  return (

    <BackgroundImage>
      <NavigationContainer theme={navTheme}>
        
        <FontLoader>

          <DrawerNavigator />

        </FontLoader>
      </NavigationContainer>
    </BackgroundImage>

  );
}

