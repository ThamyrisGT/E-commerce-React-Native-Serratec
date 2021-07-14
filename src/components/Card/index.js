import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const Card = (props) => {

  let title = props.nome.replace("-",(` `))
  return (
    <View style={styles.container}>
        <Image 
        source={{uri:props.caminhoImagem}} 
        style={styles.image} 
        />
        <View style={styles.containerSecundary}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.price}>{props.preco}</Text>
        </View>
    </View>
  );
};

export default Card;
