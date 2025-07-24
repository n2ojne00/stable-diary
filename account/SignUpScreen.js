import { View, Text } from 'react-native';
import { useState } from 'react';

import base from '../styles/base';
import { InputText } from '../components/txtInput';
import { CustomButton } from '../components/pressable';
import txtStyles from '../styles/text';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from '../FirebaseConfig';


export default function SignUpScreen() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(AUTH, email, password);
      const user = userCredential.user;
      console.log("User registered:", user);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };


    return (
        <View style={base.container}>

            <View style={base.loginBox}>
                <Text style={txtStyles.title}>SIGN UP</Text>
                
                {//validator for username needed
                }
                <InputText title='Username'
                    placeholder='username'
                    keytype='text'
                    validationType='username'
                    value={username}
                    onChangeText={setUsername}
                />

                <InputText title='Email'
                    placeholder='email'
                    keytype='email-address'
                    contentType='email'
                    validationType='email'
                    value={email}
                    onChangeText={setEmail}
                />

                <InputText title='Password'
                    placeholder='password'
                    keytype='default'
                    contentType='password'
                    secure={true}
                    validationType='password'
                    value={password}
                    onChangeText={setPassword}
                />

                <CustomButton title="Sign Up" onPress={signUp} />
            </View>
        </View>
    );
}
