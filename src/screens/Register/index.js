import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Modal,
} from 'react-native';
import Button from '../../components/Button';
import {styles} from './styles';
import Header from '../../components/header';
import InputUnderline from '../../components/inputUnderline';
import DatePicker from 'react-native-date-picker';
import {cadastrar} from '../../utils/userAccont';
import apiCep from '../../services/apiCep';

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

  const obterCep = async cep => {
    let resposta = await apiCep
      .get(`${cep}/json`)
      .then(response => {
        return response.data;
      })
      .catch(erro => {
        console.log('Erro');
      });
    setRua(resposta.logradouro);
    setBairro(resposta.bairro);
    setCidade(resposta.localidade);
  };

  const buscar = () => {
    if (cep.length == 8) {
      obterCep(cep);
    }
  };

  useEffect(() => {
    buscar();
  }, [cep]);

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

          <DatePicker
            date={nascimento}
            onDateChange={data => setNascimento(data)}
            mode="date"
            androidVariant="nativeAndroid"
            showOn="button"
          />

          <InputUnderline
            placeholder="Cep"
            keyboardType="numeric"
            onChangeText={e => setCep(e)}
            value={cep}
          />

          <InputUnderline
            placeholder="Rua"
            value={rua}
          />

          <InputUnderline
            placeholder="Bairro"
            value={bairro}
          />

          <InputUnderline
            placeholder="Cidade"
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
              continuar={() => cadastrar(usuario)}
            />
            <Text style={styles.text}> Já possui cadastro? </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cadastro;
