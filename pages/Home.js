import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';
import base from '../styles/base';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/pressable';
import txtStyles from '../styles/text';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import photo from '../styles/imgStyles';
import colors from '../styles/color';
import { Icons } from '../styles/icons';
import ButtonStyles from '../styles/buttons';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={base.container}>
      <View style={base.logoHeader}>
        <Image
          source={require('../images/stableBoy.png')}
          style={photo.logo}
          resizeMode="cover"

        />

      </View>
      <View style={base.bodyContainer}>
        <Text style={txtStyles.body}>Please login or sign up to continue.</Text>
        <View style={{ flexDirection: 'row'}}>
          <CustomButton title="Login" onPress={() => navigation.navigate('Login')} size="small" />
          <CustomButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} size="small" />

        </View>

        <View >

          <Pressable style={ButtonStyles.pressImg} onPress={() => navigation.navigate('Stable')}>
            <Image
              source={require('../images/barn.jpg')}
              style={photo.pressHome}
              resizeMode="cover"
            />
            <Text style={txtStyles.overImg}>TALLI</Text>
          </Pressable>

          <Pressable style={ButtonStyles.pressImg} onPress={() => navigation.navigate('New Training')}>
            <Image
              source={require('../images/cowboy.png')}
              style={photo.pressHome}
              resizeMode="stretch"
            />
            <Text style={txtStyles.overImg}>HARJOITUS</Text>
          </Pressable>

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

