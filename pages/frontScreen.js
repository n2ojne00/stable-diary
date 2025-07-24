import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import base from '../styles/base';
import txtStyles from '../styles/text';
import { CustomButton } from '../components/pressable';
import photo from '../styles/photoStyles';

export default function FrontScreen() {

    const navigation = useNavigation();

    return (
        <View style={base.container}>
            <View style={base.frontView}>
                <Image
                    source={require('../images/stableBoy.png')}
                    style={photo.logo}
                />

                <View style={base.loginView}>
                    <Text style={txtStyles.body}>Please login or sign up to continue.</Text>

                    <CustomButton title="Login" onPress={() => navigation.navigate('Login')} />
                    <CustomButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />

                </View>

            </View>


        </View>
    );
}