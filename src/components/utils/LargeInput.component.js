import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import * as Constants from "../../constants/Constants";

export default function LargeInput({title, ...props}) {
  const [inputText, setInputText] = useState("");
  return (
    <TextInput
    label={title}
    style={{backgroundColor: Constants.colors.gray[900], color: Constants.colors.gray[650], marginBottom: 12, borderRadius: 6, marginTop: 12, ...props}}
    underlineColor={"transparent"}
    placeholderTextColor={Constants.colors.primary[900]}
    selectionColor={Constants.colors.gray[650]}
    activeUnderlineColor={Constants.colors.primary[900]}
    value={inputText}
    onChangeText={text => setInputText(text)}
    />
  );
}