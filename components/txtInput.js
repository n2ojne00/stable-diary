import { Text, TextInput, } from "react-native";
import colors from "../styles/color";
import txtStyles from "../styles/text";
import ButtonStyles from "../styles/buttons";
import React from "react";
import InputStyles from "../styles/input";

//keyboardShouldPersistTaps="handled" 

//Validators to certain text input if needed.
const validators = {
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address',

  password: (value) =>
    value.length >= 6 ? '' : 'Password must be at least 6 characters',
  username: (value) =>
    value.length >= 3 ? '' : 'Username must be atleast 3 characters',
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
}) => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');

  const handleTextChange = (value) => {
    setText(value);

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
        value={text}
        multiline={false}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={colors.txtSmall}
        keyboardType={keytype}
        onChangeText={handleTextChange}
        textContentType={contentType}
        secureTextEntry={secure}
        style={InputStyles.txtInput}
        maxLength={1000}
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
}) => {

  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');

 const handleTextChange = (value) => {
  setText(value);
  onChangeText?.(value);
 };
  return (
    <>
      <Text style={txtStyles.body}>{title}</Text>

      <TextInput
        value={text}
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



