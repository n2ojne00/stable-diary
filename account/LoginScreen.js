import { View, Text } from 'react-native';
import { useState } from 'react';

import base from '../styles/base';
import { InputText } from '../components/txtInput';
import { CustomButton } from '../components/pressable';
import txtStyles from '../styles/text';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from '../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(AUTH, email, password);
            const user = userCredential.user;
            alert('Login successful!');
            //navigation.navigate('HomeScreen'); // Navigate to HomeScreen after successful login. Does authLoader handle it on its own?
            console.log('Logged in:', user); 
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };

    return (
        <View style={base.container}>

            <View style={base.loginBox}>
                <Text style={txtStyles.title}>LOGIN</Text>

                <InputText
                    title='Email'
                    placeholder='email'
                    keytype='email-address'
                    contentType='email'
                    validationType='email'
                    value={email}
                    onChangeText={setEmail}
                />

                <InputText
                    title='Password'
                    placeholder='password'
                    keytype='default'
                    contentType='password'
                    secure={true}
                    //validationType='password'
                    value={password}
                    onChangeText={setPassword}
                />

                <CustomButton title="Login" onPress={handleLogin} />
            </View>
        </View>
    );
}
