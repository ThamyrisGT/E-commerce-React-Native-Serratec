import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
import Button from '../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';
import Input from '../../components/input';
import {salvarTokenNaStorage} from '../../repository/storage';
import {obterTokenNaStorage} from '../../repository/storage';
import {setCliente} from '../../repository/storage';
import getCliente from '../../services/apiCliente';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);
  // const Logar = () => {
  //   getCliente(username, senha)
  //     .then(resposta => {
  //       const {Authorization} = resposta.data;
  //       console.log(resposta);
  //       salvarTokenNaStorage(Authorization);
  //       setLogado(true);
  //     })
  //     .catch(erro => {
  //       console.log(erro);
  //     });
  // };

  // useEffect(() => {
  //   let token = obterTokenNaStorage();
  //   if (token) {
  //     Logar();
  //   }
  // }, [logado]);

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
          continuar={() => !logado ? navigation.navigate('Login') : navigation.navigate('Home') }
        />
      </View>
    </View>
  );
};

export default Login;
