import { View, Text } from 'react-native';
import { useState } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import base from '../styles/base';
import { InputText } from '../components/txtInput';
import { CustomButton } from '../components/pressable';
import txtStyles from '../styles/text';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from '../FirebaseConfig';
import { ButtonIcons } from '../styles/icons';
import { useNavigation } from '@react-navigation/native';


export default function SignUpScreen() {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const DB = getFirestore();

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(AUTH, email, password);
      const user = userCredential.user;

      console.log("User registered:", user);

      await setDoc(doc(DB, "users", user.uid), {
        username: username,
        email: user.email,
        createdAt: new Date().toISOString()
      });

      console.log("User saved to Firestore:", username);

    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };


  return (
    <View style={base.container}>

      <View style={base.loginBox}>
        <Text style={txtStyles.title}> Luo tunnukset </Text>

        {//validator for username needed
        }
        <InputText title='Käyttäjätunnus'
          placeholder='käyttäjätunnus'
          keytype='text'
          validationType='username'
          value={username}
          onChangeText={setUsername}
        />

        <InputText title='Sähköposti'
          placeholder='sähköposti'
          keytype='email-address'
          contentType='email'
          validationType='email'
          value={email}
          onChangeText={setEmail}
        />

        <InputText title='Salasana'
          placeholder='salasana'
          keytype='default'
          contentType='password'
          secure={true}
          validationType='password'
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton title="Rekisteröidy" onPress={signUp} />

        <CustomButton addIcon={ButtonIcons.ArrowLeft} title={'Takaisin'} onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
