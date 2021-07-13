import React from 'react';
import { View,Text,Image } from 'react-native';
import { styles } from './styles';

const Card = () => {
  return (
  <View style={styles.container}>
      <View style={styles.containerSecundary}>
      <Image 
      source={require('../../assets/teste.png')}
      style={styles.image}
      resizeMode='contain'
      />

      </View>
      <Text style={styles.title}>Nome Do Produto</Text>
      <Text style={styles.price}>R$00,00</Text>
  </View>
  )
}

export default Card;