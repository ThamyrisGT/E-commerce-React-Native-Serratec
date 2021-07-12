import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../ButtonSecundary/styles';

const ButtonSecundary = props => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.button} onPress={props.entrar}>
        <Text style={styles.text}> {props.title} </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ButtonSecundary;
