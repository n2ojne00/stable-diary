import { Text, TextInput, } from "react-native";
import colors from "../styles/color";
import txtStyles from "../styles/text";
import ButtonStyles from "../styles/buttons";

//<InputText title='' value='' placeholder='' keytype ='' onChange={() => { }} />
export const InputText = ({ title, value, placeholder, keytype, onChange }) => {
    return (
    <>
        <Text style={txtStyles.body}>{title}</Text>
        <TextInput value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.txtSmall}
          keyboardType={keytype}
          onChangeText={onChange}
          style={ButtonStyles.txtInput} />
    </>
    );
};