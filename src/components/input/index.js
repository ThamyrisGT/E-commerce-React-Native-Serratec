import React,{useState} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
    style={isFocused ? styles.inputSelect : styles.input}
    onBlur={() => setIsFocused(false)}
    onFocus={() => setIsFocused(true)}
    {...props}
    />
  );
};

export default Input;
