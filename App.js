import FontLoader from './components/fontLoader';
import BackgroundImage from './components/background';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AuthLoader from './account/authLoader';
import { UserProvider } from './components/userInformation';



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
          <UserProvider>
            <AuthLoader />
          </UserProvider>
        </FontLoader>
      </NavigationContainer>

    </BackgroundImage>

  );
}

