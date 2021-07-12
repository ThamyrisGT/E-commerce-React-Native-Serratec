import React from 'react';
import {Text, View} from 'react-native';
import Button from './../../components/Button';
import {styles} from './styles';


const Cadastro = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text> Cadastrar</Text>
     <Button title="Voltar ao inicio" activeOpacity={0.7} cadastrar={() => navigation.navigate('Home')}/>
    </View>
  );
};

export default Cadastro;
