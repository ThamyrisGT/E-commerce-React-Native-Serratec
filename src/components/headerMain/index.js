import React from 'react';
import {Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Input from '../../components/input';

const HeaderMain = props => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../assets/logoCor.png')}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.containerLogin}>
          <Text style={styles.textLogin} onPress={props.entrar}>
            Login |{' '}
          </Text>
          <Text style={styles.textLogin} onPress={props.cadastrar}>
            Cadastro
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerInput}>
        <Input placeholder="Pesquisar" />
      </View>
    </View>
  );
};

export default HeaderMain;
