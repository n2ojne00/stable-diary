import React, { useState } from 'react';
import { View, Text, Alert, } from 'react-native';
import { AUTH, DB } from '../FirebaseConfig';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { InputText } from '../components/txtInput';
import ButtonStyles from '../styles/buttons';
import base from '../styles/base';
import txtStyles from '../styles/text';
import { CustomButton } from '../components/pressable';
import { ButtonIcons } from '../styles/icons';
import { useUser } from '../components/userInformation';

export function DeleteUser() {

    const { user } = useUser();
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    //
    const handleDelete = async () => {
        const user = AUTH.currentUser;
        if (!user) {
            Alert.alert('Virhe', 'Käyttäjää ei löytynyt.');
            return;
        }

        if (!password) {
            Alert.alert('Virhe', 'Syötä salasana.');
            return;
        }

        setLoading(true);

        try {
            //checks given password
            const credential = EmailAuthProvider.credential(user.email, password);
            await reauthenticateWithCredential(user, credential);

            //Removing from firestore
            await deleteDoc(doc(DB, 'users', user.uid));

            //Remove from firebase AUTH
            await user.delete();

            Alert.alert('Tili poistettu', 'Käyttäjätilisi on poistettu.');

        } catch (error) {
            console.error('Virhe poistossa:', error);
            Alert.alert('Virhe', 'Tarkista salasana');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={[{ alignItems: 'center', justifyContent: 'center', }, base.container]}>

            <Text style={[txtStyles.subtitle, { textAlign: 'center' }]}>
                Tilin {user.email} poistamiseksi sinun tulee syöttää salasana
            </Text>

            <View>

                <InputText title='Syötä salasana'
                    placeholder='salasana'
                    keytype='default'
                    contentType='password'
                    secure={true}
                    validationType='password'
                    value={password}
                    onChangeText={setPassword}
                />

                <CustomButton
                    addIcon={ButtonIcons.Trash}
                    title="Poista tili"
                    onPress={handleDelete}
                    reStyle={ButtonStyles.deleteBtn}
                />

                <CustomButton
                    addIcon={ButtonIcons.ArrowLeft}
                    title={'Takaisin'}
                    onPress={() => navigation.goBack()}
                    reStyle={ButtonStyles.goBackBtn}
                />

            </View>
        </View>
    );
}