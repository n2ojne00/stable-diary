import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';
import base from '../styles/base';
import { useNavigation } from '@react-navigation/native';
import { CustomButton, HomeTabButton } from '../components/pressable';
import txtStyles from '../styles/text';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import photo from '../styles/photoStyles';
import colors from '../styles/color';
import { Icons } from '../styles/icons';
import ButtonStyles from '../styles/buttons';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={base.container}>

      <View style={base.bodyContainer}>

        <View >

          <HomeTabButton
            title="TALLI"
            img={require('../images/barn.jpg')}
            onPress={() => navigation.navigate('Stable')}
          />

          <HomeTabButton
            title="HARJOITUS"
            img={require('../images/cowboy.png')}
            onPress={() => navigation.navigate('New Training')}
          />

          <Pressable style={styles.calendar}>
            <Text style={txtStyles.subtitle}>WEEK View</Text>
          </Pressable>

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

