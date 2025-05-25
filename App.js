import FontLoader from './components/fontLoader';
import BackgroundImage from './components/background';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/AppDrawer';
import MainNavigation from './navigation/MainNavigation';


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
      <NavigationContainer theme={navTheme} >
        <FontLoader>
          <MainNavigation/>
        </FontLoader>
      </NavigationContainer>
    </BackgroundImage>

  );
}

