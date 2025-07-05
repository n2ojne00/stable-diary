import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, TextInput, View } from 'react-native';
import base from '../styles/base';
import txtStyles from '../styles/text';
import { CustomButton } from '../components/pressable';
import { ButtonIcons } from '../styles/icons';


export default function Settings() {

    const navigation = useNavigation();

    return (

        <View style={base.container}>
            <Text style={txtStyles.header}>TESTING STYLES</Text>

        
                <CustomButton addIcon={ButtonIcons.ArrowLeft} title={'Takaisin'} onPress={() => navigation.navigate('UserProfile')} />
                <Text>HELLO</Text>
            

        </View>

    );
}