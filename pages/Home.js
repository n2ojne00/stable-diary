import { View, } from 'react-native';
import base from '../styles/base';
import { useNavigation } from '@react-navigation/native';
import { HomeTabButton } from '../components/pressable';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={base.container}>

      <View style={base.bodyContainer}>

        <HomeTabButton
          title="talli"
          img={require('../images/barn.jpg')}
          onPress={() => navigation.navigate('Stable')}
        />

        <HomeTabButton
          title="harjoitus"
          img={require('../images/cowboy.png')}
          onPress={() => navigation.navigate('New Training')}
        />

        <HomeTabButton
          title="Lisää hevonen"
          img={require('../images/plank.jpg')}
          onPress={() => navigation.navigate('NewHorse')}
        />

      </View>

    </View>
  );
}


