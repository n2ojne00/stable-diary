import React, { useState } from 'react';
import { Text, TextInput, } from "react-native";
import colors from "../styles/color";
import txtStyles from "../styles/text";
import ButtonStyles from "../styles/buttons";
import InputStyles from "../styles/input";

//keyboardShouldPersistTaps="handled" 

//Validators to certain text input if needed.
const validators = {
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address',

  password: (value) =>
    value.length >= 6 ? '' : 'Salasanan tulee olla vähintään 6 merkkiä',
  username: (value) =>
    value.length >= 3 ? '' : 'Käyttäjätunnuksen tulee olla vähintään 3 merkkiä',
  training: (value) =>
    value.length >= 1  ? '' : 'Lisää minuutit',
  none: () => ''  // for no validation
};

//<InputText title='' placeholder='' keytype='default' contentType='password' secure={true/false} validationType='none/password/..'/>
export const InputText = ({
  title,
  placeholder,
  keytype,
  contentType,
  secure,
  validationType = 'none',
  onValidChange,
  onChangeText,
  value = '',
  maxLength,
}) => {
  //const [text, setText] = useState('');
  const [error, setError] = useState('');



  const handleTextChange = (value) => {
    //setText(value);

    const validate = validators[validationType] || validators.none;
    const validationResult = validate(value);

    setError(validationResult);
    if (onValidChange) onValidChange(!validationResult);
    if (onChangeText) onChangeText(value);

  };

  return (
    <>
      <Text style={txtStyles.body}>{title}</Text>

      <TextInput
        value={value}
        multiline={false}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={colors.txtSmall}
        keyboardType={keytype}
        onChangeText={handleTextChange}
        textContentType={contentType}
        secureTextEntry={secure}
        style={InputStyles.txtInput}
        maxLength={maxLength}

      />

      {error ? <Text style={txtStyles.error}>{error}</Text> : null}
    </>
  );
};

export const NoteInput = ({
  title,
  placeholder,
  keytype,
  contentType,
  maxLength = 1000,
  onValidChange,
  onChangeText,
  value = '',
}) => {

  const [error, setError] = useState('');

  const handleTextChange = (value) => {
    onChangeText?.(value);
  };
  return (
    <>
      <Text style={txtStyles.body}>{title}</Text>

      <TextInput
        value={value}
        multiline={true}
        placeholder={placeholder}
        placeholderTextColor={colors.txtSmall}
        keyboardType={keytype}
        onChangeText={handleTextChange}
        textContentType={contentType}
        style={InputStyles.noteInput}
        maxLength={maxLength}
      />
      {error ? <Text style={txtStyles.error}>{error}</Text> : null}

    </>
  );
};



