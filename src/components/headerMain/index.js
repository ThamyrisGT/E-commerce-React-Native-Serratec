import React, {useEffect, useState} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {styles} from './styles';
import Input from '../../components/input';
import {findCliente} from '../../services/realm';

const HeaderMain = props => {
  const [logado, setLogado] = useState(false);
  const findToken = async () => {
    const realm = await findCliente();
    const realmCliente = realm.objects('Cliente');
    let clienteAtual = {};
    realmCliente.forEach(item => (clienteAtual = item));
    const token = clienteAtual.tokenAcesso;
    if (token != '') {
      setLogado(true);
    } else {
      setLogado(false);
    }
  };
  
  useEffect(() => {
    findToken();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../assets/logoCor.png')}
          resizeMode="contain"
        />
        <View style={styles.containerLogin}>
          <Text style={styles.textLogin} onPress={props.entrar}>
            Login |{' '}
          </Text>
          <Text style={styles.textLogin} onPress={props.cadastrar}>
            Cadastro{' '}
          </Text>
          <Text style={styles.textLogin} onPress={props.sair}>
            | Logout
          </Text>
        </View>

      </View>
      <View style={styles.containerInput}>
        <Input placeholder="Pesquisar" />
      </View>
    </View>
  );
};

export default HeaderMain;
