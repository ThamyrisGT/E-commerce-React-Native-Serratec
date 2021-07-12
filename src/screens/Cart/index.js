import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from  '../../components/Button';

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Carrinho </Text>
      <Button title="Finalizar Compra" activeOpacity={0.7} cadastrar={() => navigation.navigate('Payments')}/>
    </View>
  );
};

export default Cart;
