import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button';
import apiCarrinho from '../../services/apiCarrinho';
import storage from '../../repository/storage';

const Cart = ({navigation}) => {
  const [produtos, setProdutos] = useState([]);

  const cliente = {
    id: 3,
    idPedido: 81,
    tokenAcesso:
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjI2MzUwNn0.d4zOJwkaAKXEyR-88F9WH9tsYEeEAT7nUzvGfRvL6cZiUFDK-Fl8walv6gqfxhGG3t4snkekvsNbnPRBG1xZpA',
  };

  const pedido = cliente.idPedido;

  const obterProdutosCarrinho = async () => {
    if (pedido) {
      const resposta = await apiCarrinho.getDetalhesPedido();
      let tempResposta = resposta.data;
      console.log(resposta.data);
      respostaFiltrada = tempResposta.filter(
        produto => produto.idPedido == pedido,
      );
      respostaFiltrada.map(item => {
        console.log(item);
      });
      console.log('Resposta aqui: ' + respostaFiltrada);
      respostaFiltrada = respostaFiltrada.sort((a, b) => {
        return a.id - b.id;
      });
      setProdutos(respostaFiltrada);
    }
  };

  const atualizaDetalhe = (id, detalhePedido) => {
    apiCarrinho
      .atualizaDetalhePedido(id, detalhePedido)
      .then(resposta => {
        obterProdutosCarrinho();
        console.log(resposta);
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  useEffect(() => {
    let token = cliente.tokenAcesso;
    if (!token) {
      navigation.navigate('Login');
    }
    console.log('dentro effect');
    obterProdutosCarrinho();
  }, []);

  if (!pedido) {
    return (
      <View>
        <Text> Carrinho </Text>
        <Text>Sem Produtos no Carrinho</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text> Carrinho </Text>
        <Text>Carrinho com produtos</Text>
        {produtos.map((produto, index) => (
          <View key={index}>
            <Text>Nome do Produto: {produto.idProduto}</Text>
            <Text>Nome do Detalhe: {produto.id}</Text>
            <Text>Valor do produtos: {produto.precoDoProduto}</Text>
            <Button
              title="+"
              onPress={() => {
                console.log('clicado + ');
                let pro = [...produtos];
                let novaQuantidade = produto;
                novaQuantidade.quantidadeProdutos++;
                pro[index] = novaQuantidade;
                setProdutos(pro);
                let dto = {
                  idPedido: produto.idPedido,
                  idProduto: produto.idProduto,
                  quantidade: produto.quantidadeProdutos,
                };
                atualizaDetalhe(novaQuantidade.id, dto);
                obterProdutosCarrinho();
              }}
            />
            <Text>Quantidade: {produto.quantidadeProdutos}</Text>
            <Button
              title="-"
              onPress={() => {
                console.log('clicado - ');
                let pro = [...produtos];
                let novaQuantidade = produto;
                novaQuantidade.quantidadeProdutos--;
                pro[index] = novaQuantidade;
                setProdutos(pro);
                let dto = {
                  idPedido: produto.idPedido,
                  idProduto: produto.idProduto,
                  quantidade: produto.quantidadeProdutos,
                };
                atualizaDetalhe(novaQuantidade.id, dto);
                obterProdutosCarrinho();
              }}
            />
            <Text>
              Valor por Produto:{' '}
              {produto.precoDoProduto * produto.quantidadeProdutos}
            </Text>
          </View>
        ))}
      </View>
    );
  }
};

export default Cart;
