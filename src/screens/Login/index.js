import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';
import Header from '../../components/header';
import Input from '../../components/input';
import { findCliente } from '../../services/realm';
import {getCliente} from '../../services/apiCliente';
import Cliente from '../../model/Cliente'

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');


  const logar = async () => {
    const resposta = await getCliente(username, senha);
    const tokenId = resposta.data;
    console.log(tokenId);
    if (tokenId) {
      const realm = await findCliente();
      try {
        realm.write(() => {
          realm.create('Cliente',
            new Cliente(tokenId)
            , 'modified')
        })
        console.log('deu bom')
      } catch (error) {
        console.log('deu ruim')
        console.log(error)
      }
      finally {
        realm.close();
      }
    }
  }

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
            placeholder="Username"
            value={username}
            onChangeText={e => setUsername(e)}
          />
          <Input
            textContentType={'password'}
            placeholder={'Senha'}
            secureTextEntry={true}
            value={senha}
            onChangeText={e => setSenha(e)}
          />
        </View>
        <View style={styles.containerIntern}>
          <Text style={styles.text}>Esqueci minha senha</Text>
          <Text>{username}</Text>
          <Text>{senha}</Text>
        </View>
      </View>
      <View style={styles.containerInternFooter}>
        <Button
          title="Entrar"
          activeOpacity={0.7}
          continuar={() => logar()}
        />
      </View>
    </View>
  );
};

export default Login;
