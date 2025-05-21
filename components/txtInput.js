import { Text, TextInput, } from "react-native";
import colors from "../styles/color";
import txtStyles from "../styles/text";
import ButtonStyles from "../styles/buttons";
import React from "react";


//keyboardShouldPersistTaps="handled" 

//Validators to certain text input if needed.
const validators = {
    email: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address',

    password: (value) =>
        value.length >= 6 ? '' : 'Password must be at least 6 characters',

    none: () => ''  // for no validation
};

//<InputText title='' placeholder='' keytype='default' contentType='password' secure={true/false} validationType='none/password/..'/>
export const InputText = ({ title, placeholder, keytype, contentType, secure, validationType = 'none', onValidChange, }) => {
    const [text, setText] = React.useState('');
    const [error, setError] = React.useState('');

    const handleTextChange = (value) => {
        setText(value);

        const validate = validators[validationType] || validators.none;
        const validationResult = validate(value);

        setError(validationResult);
        if (onValidChange) onValidChange(!validationResult);
    };

    return (
        <>
            <Text style={txtStyles.body}>{title}</Text>
            <TextInput 
            value={text}
                multiline={false}
                placeholder={placeholder}
                placeholderTextColor={colors.txtSmall}
                keyboardType={keytype}
                onChangeText={handleTextChange}
                textContentType={contentType}
                secureTextEntry={secure}
                style={ButtonStyles.txtInput} />
                {error ? <Text style={txtStyles.error}>{error}</Text> : null}
        </>
    );
};

