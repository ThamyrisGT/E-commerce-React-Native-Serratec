import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button';

const Payments = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Pagamentos </Text>
      <Button title="Inicio" activeOpacity={0.7} cadastrar={() => navigation.navigate('Home')}/>
    </View>
  );
};

export default Payments;
