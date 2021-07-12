import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button';

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Detalhes do Pedido </Text>
      <Button title="Adicionar ao Carrinho" activeOpacity={0.7} cadastrar={() => navigation.navigate('Cart')}/>
    </View>
  );
};

export default ProductDetails;
