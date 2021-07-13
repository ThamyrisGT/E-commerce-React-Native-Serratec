import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Button from  '../../components/Button';
import Card from  '../../components/Card';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
};

export default Home;
