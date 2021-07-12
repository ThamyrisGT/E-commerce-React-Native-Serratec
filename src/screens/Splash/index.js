import React from 'react';
import {View, StatusBar, ImageBackground} from 'react-native';
import {styles} from './styles';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Home');
  }, 2000);

  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        source={require('../../assets/background2-removebg-preview.png')}
        style={styles.img}
      />
    </View>
  );
};

export default Splash;
