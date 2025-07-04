import FontLoader from './components/fontLoader';
import BackgroundImage from './components/background';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppTabs from './navigation/BottomTabs';


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
          <AppTabs />
        </FontLoader>
      </NavigationContainer>

    </BackgroundImage>

  );
}

