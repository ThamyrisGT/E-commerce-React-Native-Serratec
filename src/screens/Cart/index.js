import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button, Image} from 'react-native';
import {styles} from './styles';
// import Button from '../../components/Button';
import apiCarrinho from '../../services/apiCarrinho';
import storage from '../../repository/storage';

const Cart = () => {
  const [produtos, setProdutos] = useState([]);
  const [pedidoAtual, setPedidoAtual] = useState([{}]);
  const cliente = {
    id: 3,
    idPedido: 81,
    // tokenAcesso:
    //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjI2MzUwNn0.d4zOJwkaAKXEyR-88F9WH9tsYEeEAT7nUzvGfRvL6cZiUFDK-Fl8walv6gqfxhGG3t4snkekvsNbnPRBG1xZpA',
  };

  const pedido = cliente.idPedido;

  const obterPedido = async () => {
    if (pedido) {
      const resposta = await apiCarrinho.obterTodosPedidos();
      const todosPedidos = resposta.data;
      todosPedidos.forEach(item => {
        if (item.id == pedido) {
          setPedidoAtual(item);
          const respostaFiltrada = item.produtosDoPedido.sort((a, b) => {
            return a.id - b.id;
          });
          setProdutos(respostaFiltrada);
          console.log(item);
          return;
        }
      });
    }
  };

  const atualizaDetalhe = (id, detalhePedido) => {
    apiCarrinho
      .atualizaDetalhePedido(id, detalhePedido)
      .then(resposta => {
        // obterProdutosCarrinho();
        obterPedido();
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  useEffect(() => {
    obterPedido();
  }, []);

  if (!pedido) {
    return (
      <View>
        <Text>Carrinho </Text>
        <Text>Sem Produtos no Carrinho</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text> Carrinho </Text>
        <Text>Carrinho com produtos</Text>
        <FlatList
          keyExtractor={item => item.id}
          data={produtos}
          renderItem={({item, index}) => (
            <View>
              <Text>Nome do Produto: {item.nomeProduto}</Text>
              <Text>Valor do produto: {item.precoDoProduto}</Text>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: item.imagemProduto}}
              />
              <Button
                title="+"
                onPress={() => {
                  console.log(`index: ${index}`);
                  let pro = [...produtos];
                  let novaQuantidade = item;
                  novaQuantidade.quantidadeProdutos++;
                  pro[index] = novaQuantidade;
                  setProdutos(pro);
                  let dto = {
                    idPedido: item.idPedido,
                    idProduto: item.idProduto,
                    quantidade: item.quantidadeProdutos,
                  };
                  atualizaDetalhe(novaQuantidade.id, dto);
                }}
              />
              <Text>Quantidade: {item.quantidadeProdutos}</Text>
              <Button
                title="-"
                onPress={() => {
                  console.log('clicado - ');
                  let pro = [...produtos];
                  let novaQuantidade = item;
                  novaQuantidade.quantidadeProdutos--;
                  pro[index] = novaQuantidade;
                  setProdutos(pro);
                  let dto = {
                    idPedido: item.idPedido,
                    idProduto: item.idProduto,
                    quantidade: item.quantidadeProdutos,
                  };
                  atualizaDetalhe(novaQuantidade.id, dto);
                }}
              />
              <Text>
                Valor total por Produto:{' '}
                {item.precoDoProduto * item.quantidadeProdutos}
              </Text>
            </View>
          )}
        />
        <Text>Valor Total: {pedidoAtual.valorTotal}</Text>
      </View>
    );
  }
};

export default Cart;
