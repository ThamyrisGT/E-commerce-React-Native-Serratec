import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Star from '../../components/Star';

const Card = props => {
  let title = props.nome.replace('-', ` `);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.avancar}>
        <Image source={{uri: props.caminhoImagem}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.containerSecundary}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.price}>{props.preco}</Text>
        <View style={styles.ContainerStar}>
          <Star />
        </View>
      </View>
    </View>
  );
};

export default Card;
