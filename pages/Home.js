import { View, Text, Button, StyleSheet, Image } from 'react-native';
import base from '../styles/base';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/pressable';
import txtStyles from '../styles/text';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import photo from '../styles/imgStyles';

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

        <View>
          <Text>STABLE</Text>
        </View>
        <View>
          <Text>Todays Training</Text>
        </View>
      
          <Text style={txtStyles.body}>Please login or sign up to continue.</Text>
          <View >
            <CustomButton title="Login" onPress={() => navigation.navigate('Login')} size="small" />
        
        </View>
      </View>

    </View>
  );
}

