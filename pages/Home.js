import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';
import base from '../styles/base';
import { useNavigation } from '@react-navigation/native';
import { HomeTabButton } from '../components/pressable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/color';


export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={base.container}>

      <View style={base.bodyContainer}>

        <View >

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
          {/**
  * <Pressable style={styles.calendar}>
            <Text style={txtStyles.subtitle}>WEEK View</Text>
          </Pressable>
  */}


        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    width: wp("90%"),
    height: hp("20%"),
    backgroundColor: colors.greeny,
    borderWidth: 1,
    borderRadius: 5,
  },
});

