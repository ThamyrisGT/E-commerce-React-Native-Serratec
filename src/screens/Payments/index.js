import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import Header from '../../components/header';
import Input from '../../components/input';


const Payments = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        text={'Voltar'}
        screen={'Pagamento'}
        voltar={() => navigation.navigate('Cart')} />


      <Text style={styles.texto}>Formas de Pagamento </Text>
      <View style={styles.containerImg} >
        <Image
          style={styles.img}
          source={require('../../assets/pagamento.png')}
        />
      </View>
      <View style={styles.inputPay}>
        <View style={styles.inputPay}>
          <Input keyboardType="numeric" placeholder={'Número do cartão'} />
        </View>
        <View style={styles.inputPay}>
          <Input placeholder={'Nome'} />
        </View >
        <View style={styles.inputPay}>
          <Input keyboardType="numeric" placeholder={'Validade do cartão'} />
        </View>
        <View style={styles.inputPay}>
          <Input ecureTextEntry={true} placeholder={'Senha do cartão'} />
        </View>
      </View>
      <Button title="Confirmar pagamento"
        activeOpacity={0.7}
        continuar={() => Alert.alert("Pedido feito com sucesso!", "Agradecemos a preferência ;)")} />
    </View>
  );
};

export default Payments;
