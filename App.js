import FontLoader from './components/fontLoader';
import BackgroundImage from './components/background';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import AuthLoader from './components/authLoader';


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
          <AuthLoader />
        </FontLoader>
      </NavigationContainer>

    </BackgroundImage>

  );
}

