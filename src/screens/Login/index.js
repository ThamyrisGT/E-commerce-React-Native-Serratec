import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';
import Header from '../../components/header';
import Input from '../../components/input';
import { logar } from '../../utils/userAccont';
import { findClienteStorage } from '../../repository/storage';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  findClienteStorage();

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
        </View>
      </View>
      <View style={styles.containerInternFooter}>
        <Button
          title="Entrar"
          activeOpacity={0.7}
          continuar={() => logar(username, senha)}
        />
      </View>
    </View>
  );
};

export default Login;
