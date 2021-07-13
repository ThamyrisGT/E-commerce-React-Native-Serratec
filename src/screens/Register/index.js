import React from 'react';
import {View,Text,StatusBar,ScrollView} from 'react-native';
import Button from '../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';
import InputUnderline from '../../components/inputUnderline';

const Cadastro = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden={true} translucent />
        <Header
          text={'Voltar'}
          screen={'Cadastro'}
          voltar={() => navigation.navigate('Home')}
        />
        <View>
          <InputUnderline placeholder="Nome" />
          <InputUnderline placeholder="E-mail" keyboardType="email-address" />
          <InputUnderline
            textContentType={'password'}
            placeholder={'Senha'}
            secureTextEntry={true}
          />
          <InputUnderline placeholder="Telefone" keyboardType="phone-pad" />
          <InputUnderline placeholder="Data de Nascimento" />
          <InputUnderline placeholder="Cep" keyboardType="numeric" />
          <InputUnderline placeholder="Rua" />
          <InputUnderline placeholder="Bairro" />
          <InputUnderline placeholder="Cidade" />
          <InputUnderline placeholder="Número" keyboardType="numeric" />
          <InputUnderline placeholder="Complemento" multiline={true} />
          <View style={styles.containerSecundary}>
          <Button
              title="Cadastrar"
              activeOpacity={0.7}
              cadastrar={() => navigation.navigate('Home')}
            />
            <Text style={styles.text}> Já possui cadastro? </Text>
          </View>
        </View>
 
      </View>
    </ScrollView>
  );
};

export default Cadastro;
