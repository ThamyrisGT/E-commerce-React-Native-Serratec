import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from  '../../components/Button';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Home </Text>
      <Button title="Login" activeOpacity={0.7} cadastrar={() => navigation.navigate('Login')}/>
      <Button title="Cadastrar" activeOpacity={0.7} cadastrar={() => navigation.navigate('Register')}/>
      <Button title="Detalhes" activeOpacity={0.7} cadastrar={() => navigation.navigate('ProductDetails')}/>
    </View>
  );
};

export default Home;
