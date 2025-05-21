import { View, Text } from 'react-native';
import base from '../styles/base';
import { InputText } from '../components/txtInput';

export default function LoginScreen() {
  return (
    <View style={base.container}>
      <Text>Here you can signUp</Text>
      <View style={base.inputBox}>

        <InputText title='Test' placeholder='email' keytype='email-address'/>
        <InputText title='Test' placeholder='email' keytype='default' contentType='password' />
        <InputText title='Test' placeholder='email' keytype='text' />
        
        <CustomButton title="Sign Up" onPress={() => { }} />
      </View>
    </View>
  );
}
