import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../Button/styles';

const Button = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.cadastrar}>
        <Text style={styles.text}> {props.title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
