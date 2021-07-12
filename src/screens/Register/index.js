import React from 'react';
import {View,StatusBar} from 'react-native';
import Button from '../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';
import Input from '../../components/input';


const Cadastro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent />
      <Header
        text={'Voltar'}
        screen={'Cadastro'}
        voltar={() => navigation.navigate('Home')}
      />
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='E-mail'
            keyboardType="email-address"
          />
          <Input
            textContentType={'password'}
            placeholder={'Senha'}
            secureTextEntry={true}
          />
           <Input
            placeholder='Telefone'
            keyboardType='phone-pad'
          />
           <Input
            placeholder='Data de Nascimento'
            
          />
          <Input
            placeholder='Cep'
            keyboardType='numeric'
          />
          <Input
            placeholder='Rua'
          />
          <Input
            placeholder='Bairro'
          />
          <Input
            placeholder='Cidade'
          />
          <Input
            placeholder='Número'
            keyboardType='numeric'
          />
          <Input
            placeholder='Complemento'
            multiline={true}
          />

     <Button title="Voltar ao inicio" activeOpacity={0.7} cadastrar={() => navigation.navigate('Home')}/>
    </View>
  );
};

export default Cadastro;
