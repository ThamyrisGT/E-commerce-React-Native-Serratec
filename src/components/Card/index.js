import React,{useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import IconStar from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = (props) => {

  const[cor,setCor]= useState("black")

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
        <View style={styles.ContainerStar}>
        <IconStar
           name='star-outline' size={30}
           color={cor}
          onPress={()=> cor=='black' ? setCor('yellow') : setCor('black')}
           />
           <IconStar
           name='star-outline' size={30} 
           onPress={()=> cor=='black' ? setCor('yellow') : setCor('black')}
           />
           <IconStar
           name='star-outline' size={30}
           onPress={()=> cor=='black' ? setCor('yellow') : setCor('black')}
           />
           <IconStar
           name='star-outline' size={30}
           onPress={()=> cor=='black' ? setCor('yellow') : setCor('black')}
           />
        </View>
        </View>
    </View>
  );
};

export default Card;
