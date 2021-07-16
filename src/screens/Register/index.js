import React, {useState} from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import Button from '../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';
import InputUnderline from '../../components/inputUnderline';
import {register} from '../../services/apiCliente';
import DatePicker from 'react-native-date-picker';

const Cadastro = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [username, setUsername] = useState('');
  const [nascimento, setNascimento] = useState(new Date());
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');

  const usuario = {
    cpf: cpf,
    nome: nome,
    email: email,
    senha: senha,
    username: username,
    telefone: telefone,
    dataNascimento: nascimento,
    enderecosDoCliente: [
      {
        cep: cep,
        numero: numero,
        complemento: complemento,
      },
    ],
  };

  const cadastrar = async () => {
    const resposta = await register(usuario);
    const cliente = resposta.data;
    console.log(cliente);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden={true} translucent />
        <Header
          text={'Voltar'}
          screen={'Cadastro'}
          voltar={() => navigation.navigate('Home')}
        />
        <View>
          <InputUnderline
            placeholder="Nome"
            onChangeText={e => setNome(e)}
            value={nome}
          />
          <InputUnderline
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={e => setEmail(e)}
            value={email}
          />

          <InputUnderline
            textContentType={'password'}
            placeholder={'Senha'}
            secureTextEntry={true}
            onChangeText={e => setSenha(e)}
            value={senha}
          />

          <InputUnderline
            keyboardType="numeric"
            placeholder="CPF"
            onChangeText={e => setCpf(e)}
            value={cpf}
          />

          <InputUnderline
            placeholder="Username"
            onChangeText={e => setUsername(e)}
            value={username}
          />

          <InputUnderline
            placeholder="Telefone"
            keyboardType="phone-pad"
            onChangeText={e => setTelefone(e)}
            value={telefone}
          />

          {/* <InputUnderline
            placeholder="Data de Nascimento"
            onChangeText={e => setNascimento(e)}
            value={nascimento}
          /> */}

          <DatePicker
            date={nascimento}
            onDateChange={data => setNascimento(data)}
            mode="date"
            androidVariant="nativeAndroid"
          />

          <InputUnderline
            placeholder="Cep"
            keyboardType="numeric"
            onChangeText={e => setCep(e)}
            value={cep}
          />

          <InputUnderline
            placeholder="Rua"
            onChangeText={e => setRua(e)}
            value={rua}
          />

          <InputUnderline
            placeholder="Bairro"
            onChangeText={e => setBairro(e)}
            value={bairro}
          />

          <InputUnderline
            placeholder="Cidade"
            onChangeText={e => setCidade(e)}
            value={cidade}
          />

          <InputUnderline
            placeholder="Número"
            keyboardType="numeric"
            onChangeText={e => setNumero(e)}
            value={numero}
          />

          <InputUnderline
            placeholder="Complemento"
            multiline={true}
            onChangeText={e => setComplemento(e)}
            value={complemento}
          />

          <View style={styles.containerSecundary}>
            <Button
              title="Cadastrar"
              activeOpacity={0.7}
              continuar={() => cadastrar()}
            />
            <Text style={styles.text}> Já possui cadastro? </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cadastro;
