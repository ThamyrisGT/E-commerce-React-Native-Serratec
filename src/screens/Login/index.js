import React, {useState} from 'react';
import {Text, View, TextInput, StatusBar} from 'react-native';
import Button from '../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';
import Input from '../../components/input';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent />
      <Header
        text={'Voltar'}
        screen={'Login'}
        voltar={() => navigation.navigate('Home')}
      />
      <View style={styles.containerIntern}>
        <View style={styles.containerIntern}>
          <Input
            placeholder='Username'
          />
          <Input
            textContentType={'password'}
            placeholder={'Senha'}
            secureTextEntry={true}
          />

          {/* <TextInput
            style={isFocused ? styles.inputSelect : styles.input}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            keyboardType="email-address"
            placeholder="E-mail, nome de usuário ou telefone"
            returnKeyType={'next'}
            onEndEditing={() => {
              input2.focus();
            }}
            blurOnSubmit={false}
          /> */}
          {/* <TextInput
            style={isFocused ? styles.inputSelect : styles.input}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            textContentType="password"
            placeholder="Senha"
            secureTextEntry={true}
            returnKeyType={'next'}
            ref={input => {
              input2 = input;
            }}
          /> */}
        </View>
        <View style={styles.containerIntern}>
          <Text style={styles.text}>Esqueci minha senha</Text>
        </View>
      </View>
      <View style={styles.containerInternFooter}>
        <Button
          title="Entrar"
          activeOpacity={0.7}
          continuar={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Login;
