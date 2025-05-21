import { Text, TextInput, View } from 'react-native';
import txtStyles from '../styles/text';
import base from '../styles/base';
import { CustomButton, Horse, IconButton } from '../components/pressable';
import colors from '../styles/color';
import ButtonStyles from '../styles/buttons';
import { InputText } from '../components/txtInput';

export default function TestStyles() {
  return (
    <View style={base.container}>
      {/**
           * <Text style={txtStyles.header}>Hello World, header</Text>
      <Text style={txtStyles.header}>Hello World, header</Text>
      <Text style={txtStyles.title}>Hello World, title</Text>
      <Text style={txtStyles.subtitle}>Hello World, subtitle</Text>
      <Text style={txtStyles.body}>Hello World, body</Text>
      <Text style={txtStyles.small}>Hello World, small</Text>
      <Text style={txtStyles.error}>Hello World, error</Text>
      <CustomButton title="This is Button" onPress={() => { }} />
      <CustomButton title="Small Button" onPress={() => { }} size="small" />
      <IconButton iconName="arrowleft" onPress={() => { }} size={28} color={colors.txtWhite} />
            <Horse title="Horse name" onPress={() => { }} color={colors.txtWhite}/>
           */}

      <View style={base.inputBox}>

        <Text style={txtStyles.body}>This is text</Text>
        <TextInput value={""}
          placeholder="Age"
          placeholderTextColor={colors.txtSmall}
          keyboardType="numeric"
          onChangeText={""}
          style={ButtonStyles.txtInput} />

        <InputText title='Test' value='' placeholder='email' keytype='text' onChange={() => { }} />
      </View>
    </View>
  );
}
