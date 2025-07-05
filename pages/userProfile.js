import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import base from '../styles/base';
import txtStyles from '../styles/text';
import { CustomButton } from '../components/pressable';
import { ButtonIcons, Icons, TabIcons } from '../styles/icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/color';
import { useNavigation } from '@react-navigation/native';


export default function UserProfile() {

    const navigation = useNavigation();

    return (
        <View style={base.container}>

            {// User profile information
            }
            <View style={base.profileInfo}>
                <View style={styles.profileImg}>
                    {TabIcons.Profile(colors.greenyDark, wp("15%"))}
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={txtStyles.body}>user.user@gmail.com</Text>
                    <Text style={txtStyles.body}>Rekisteröitynyt vuonna 2025</Text>
                </View>
            </View>

            {// Add new horse button
            }
            <CustomButton addIcon={ButtonIcons.Add} title={'Lisää uusi hevonen'} onPress={() => navigation.navigate('NewHorse')} />
            {// Settings
            }
            <CustomButton addIcon={ButtonIcons.Settings} title={'Asetukset'} onPress={() => navigation.navigate('Settings')} />
            {// Logout button
            }
            <CustomButton addIcon={ButtonIcons.Logout} title={'Kirjaudu ulos'} onPress={() => { console.log('kirjauduttu ulos') }} />

        </View>
    );
}

const styles = StyleSheet.create({
    profileImg: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: wp("25%"),
        height: wp("25%"),
        borderRadius: 100,
    }
});

