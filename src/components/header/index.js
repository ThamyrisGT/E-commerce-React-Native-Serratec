import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/theme';

const Header = props => {
  return (
    <View style={styles.container}>
      <Icon
        name="angle-left"
        size={40}
        color={theme.colors.primary}
        onPress={props.voltar}
      />
      <Text style={styles.text}> {props.text} </Text>
      <Text style={styles.screen}> {props.screen} </Text>
    </View>
  );
};

export default Header;
