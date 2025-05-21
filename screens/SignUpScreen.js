import { View, Text } from 'react-native';
import base from '../styles/base';
import { InputText } from '../components/txtInput';
import { CustomButton } from '../components/pressable';

export default function SignUpScreen() {
  return (
    <View style={base.container}>
      <Text>Here you can signUp</Text>
      <View style={base.inputBox}>

        <InputText title='Name' placeholder='name' keytype='text' />
        <InputText title='Email' placeholder='email' keytype='email-address' contentType='email' validationType='email'/>
        <InputText title='Password' placeholder='password' keytype='default' contentType='password' secure={true} validationType='password'/>
        
        
        <CustomButton title="Sign Up" onPress={() => { }} />
      </View>
    </View>
  );
}
