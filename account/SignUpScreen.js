import { View, Text } from 'react-native';
import base from '../styles/base';
import { InputText } from '../components/txtInput';
import { CustomButton } from '../components/pressable';
import txtStyles from '../styles/text';

export default function SignUpScreen() {

    return (
        <View style={base.container}>
            
            <View style={base.inputBox}>
                <Text style={txtStyles.title}>SIGN UP</Text>
                {//validator for username needed
                }

                <InputText title='Username' placeholder='username' keytype='text' />
                <InputText title='Email' placeholder='email' keytype='email-address' contentType='email' validationType='email' />
                <InputText title='Password' placeholder='password' keytype='default' contentType='password' secure={true} validationType='password' />

                <CustomButton title="Sign Up" onPress={() => { }} />
            </View>
        </View>
    );
}
