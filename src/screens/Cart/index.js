import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {styles} from './styles';
// import Button from '../../components/Button';
import apiCarrinho from '../../services/apiCarrinho';
import storage from '../../repository/storage';

const Cart = async ({navigation}) => {
  const [produtos, setProdutos] = useState([]);

  const cliente = await storage.getCliente();

  const pedido = cliente.idPedido;

  const obterProdutosCarrinho = async () => {
    if (pedido) {
      const resposta = await apiCarrinho.getDetalhesPedido();
      let tempResposta = resposta.data;
      respostaFiltrada = tempResposta.filter(
        produto => produto.idPedido == pedido,
      );
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
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  useEffect(() => {
    let token = cliente.token;
    if (!token) {
      navigation.navigate('Login');
    }
    obterProdutosCarrinho();
  }, []);

  if (!pedido) {
    <View>
      <Text> Carrinho </Text>
      <Text>Sem Produtos no Carrinho</Text>
    </View>;
  } else {
    return (
      <View style={styles.container}>
        <Text> Carrinho </Text>
        {produtos.map((produto, index) => {
          <View key={index}>
            <Text>Nome do Produto: {produto.idProduto}</Text>
            <Text>Nome do Detalhe: {produto.id}</Text>
            <Text>Valor do produtos: {produto.precoDoProduto}</Text>
            <Button
              onPress={() => {
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
              }}
            />
            <Text>Quantidade: {produto.quantidadeProdutos}</Text>
            <Button
              onPress={() => {
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
              }}
            />
            <Text>
              Valor por Produto:{' '}
              {produto.precoDoProduto * produto.quantidadeProdutos}
            </Text>
          </View>;
        })}
        {/* <Button
          title="Finalizar Compra"
          activeOpacity={0.7}
          cadastrar={() => navigation.navigate('Payments')}
        /> */}
      </View>
    );
  }
};

export default Cart;
