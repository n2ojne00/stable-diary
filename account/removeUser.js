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

    const handleDelete = async () => {
        if (!password) {
            Alert.alert('Virhe', 'Syötä salasana.');
            return;
        }

        // Confirm before deleting
        Alert.alert(
            'Vahvista tilin poisto',
            'Haluatko varmasti poistaa tilisi? Tämä toiminto on peruuttamaton.',
            [
                { text: 'Peruuta', style: 'cancel' },
                {
                    text: 'Poista',
                    style: 'destructive',
                    onPress: async () => {
                        setLoading(true);
                        try {
                            const user = AUTH.currentUser;
                            if (!user) {
                                Alert.alert('Virhe', 'Käyttäjää ei löytynyt.');
                                return;
                            }

                            const credential = EmailAuthProvider.credential(user.email, password);
                            await reauthenticateWithCredential(user, credential);

                            //remove user data from firestore
                            await deleteDoc(doc(DB, 'users', user.uid));
                            //Remove user from authentication
                            await user.delete();

                            Alert.alert('Tili poistettu', 'Käyttäjätilisi on poistettu.');

                        } catch (error) {
                            Alert.alert('Virhe', 'Tarkista salasana');
                        } finally {
                            setLoading(false);
                        }
                    }
                }
            ]
        );
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