import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';
import IconSearch from 'react-native-vector-icons/EvilIcons';

const InputSearch = props => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <TextInput
        style={isFocused ? styles.inputSelect : styles.input}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        {...props}
      />
      <IconSearch style={styles.search} name="search" size={45} />
    </>
  );
};

export default InputSearch;
