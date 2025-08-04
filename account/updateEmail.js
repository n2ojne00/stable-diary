import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { AUTH, DB } from '../FirebaseConfig';
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import ButtonStyles from '../styles/buttons';
import base from '../styles/base';
import txtStyles from '../styles/text';
import { CustomButton } from '../components/pressable';
import { ButtonIcons } from '../styles/icons';
import { useUser } from '../components/userInformation';
import { InputText } from '../components/txtInput';

//Component updates only on Firestore, not on Auth!! <- problem

export function UpdateEmail() {
  const { user } = useUser();
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleUpdateEmail = async () => {
    const currentUser = AUTH.currentUser;
    if (!currentUser) {
      Alert.alert('Virhe', 'Käyttäjää ei löytynyt.');
      return;
    }

    if (!password || !newEmail) {
      Alert.alert('Virhe', 'Täytä kaikki kentät.');
      return;
    }

    setLoading(true);

    try {
      const credential = EmailAuthProvider.credential(currentUser.email, password);
      await reauthenticateWithCredential(currentUser, credential);

      // Updates email in Firebase Auth - current error: [FirebaseError: Firebase: Please verify the new email before changing email. (auth/operation-not-allowed).]
      //await updateEmail(currentUser, newEmail);
      //await sendEmailVerification(currentUser);

      // Updates email in Firestore
      await updateDoc(doc(DB, 'users', currentUser.uid), {
        email: newEmail,

      });
      console.log('Sähköposti päivitetty:', newEmail);

      Alert.alert('Sähköposti päivitetty', 'Sähköpostiosoite on nyt vaihdettu.');

      navigation.goBack();

    } catch (error) {
      console.error('Virhe päivityksessä:', error);
      Alert.alert('Virhe', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[{ alignItems: 'center', justifyContent: 'center' }, base.container]}>

      <Text style={[txtStyles.subtitle, { textAlign: 'center' }]}>
        Syötä uusi sähköposti ja nykyinen salasana
      </Text>

      <InputText
        title='Uusi sähköposti'
        placeholder='uusi@email.com'
        keytype='email-address'
        contentType='email'
        validationType='email'
        value={newEmail}
        onChangeText={setNewEmail}
      />

      <InputText
        title='Salasana'
        placeholder='salasana'
        keytype='default'
        contentType='password'
        secure={true}
        validationType='password'
        value={password}
        onChangeText={setPassword}
      />

      <CustomButton
        title="Vaihda sähköposti"
        onPress={handleUpdateEmail}
        reStyle={ButtonStyles.primaryBtn}
      />

      <CustomButton
        addIcon={ButtonIcons.ArrowLeft}
        title={'Takaisin'}
        onPress={() => navigation.goBack()}
        reStyle={ButtonStyles.goBackBtn}
      />
    </View>
  );
}
