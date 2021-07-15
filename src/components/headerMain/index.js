import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {styles} from './styles';
import Input from '../../components/input';

const HeaderMain = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../assets/logoCor.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerInput}>
        <Input placeholder="Pesquisar" />
      </View>
    </View>
  );
};

export default HeaderMain;
