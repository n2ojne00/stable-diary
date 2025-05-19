import { StyleSheet, Text, View } from 'react-native';
import TestStyles from './pages/style-test';
import FontLoader from './components/fontLoader';
import BackgroundImage from './components/bgImage';
import base from './styles/base';

export default function App() {
  return (
    <BackgroundImage>
    <FontLoader>
      
      <View style={base.container}>
        <TestStyles />
      </View>
      
    </FontLoader>
  </BackgroundImage>
  );
}

