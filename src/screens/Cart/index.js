import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { styles } from './styles';
// import Button from '../../components/Button';
import apiCarrinho from '../../services/apiCarrinho';
import { findProdutos } from '../../services/realm'
import storage from '../../repository/storage';

const Cart = () => {
  const [produtos, setProdutos] = useState([]);
  const [prod, setProd] = useState([])
  const cliente = {
    id: 3,
    idPedido: 81,
    // tokenAcesso:
    //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjI2MzUwNn0.d4zOJwkaAKXEyR-88F9WH9tsYEeEAT7nUzvGfRvL6cZiUFDK-Fl8walv6gqfxhGG3t4snkekvsNbnPRBG1xZpA',
  };

  const getProdutoById = async () => {
    const realmProdutos = await findProdutos();
    const produtos = realmProdutos.objects('Produto');
    return produtos;
  }

  const pedido = cliente.idPedido;

  const obterProdutosCarrinho = async () => {
    if (pedido) {
      const resposta = await apiCarrinho.getDetalhesPedido();
      const tempResposta = resposta.data;
      let respostaFiltrada = tempResposta.filter(
        produto => produto.idPedido == pedido
      );
      respostaFiltrada = respostaFiltrada.sort((a, b) => {
        return a.id - b.id;
      });

      let tempNomeQualquer = respostaFiltrada.map(item => item.idProduto);

      console.log("tempNomeQualquer: " + tempNomeQualquer[1])

      var todosProdutos = await getProdutoById();

      let produtosFiltrados = [];

      for (let i = 0; i < todosProdutos.length; i++) {
        // console.log('Todos os Produtos: ' +todosProdutos[i].id)
        for (let j in tempNomeQualquer) {
          console.log('iD dos Produtos: ' + tempNomeQualquer[j].id)
          if (todosProdutos[i].id == tempNomeQualquer[j].id) {
            produtosFiltrados.push(todosProdutos[i])
            console.log(todosProdutos[i].nome)
          }
        }
      }

      setProd(produtosFiltrados)
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
    obterProdutosCarrinho();
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
          renderItem={({ item, index }) => (
            <View>
              <Text>Nome do Produto: {item.idProduto}</Text>
              <Text>Nome do Detalhe: {item.id}</Text>
              <Text>Valor do produtos: {item.precoDoProduto}</Text>
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
                  obterProdutosCarrinho();
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
                  obterProdutosCarrinho();
                }}
              />
              <Text>
                Valor por Produto:{' '}
                {item.precoDoProduto * item.quantidadeProdutos}
              </Text>
            </View>
          )}
        />
        <FlatList
          keyExtractor={item => item.id}
          data={prod}
          renderItem={({ item }) => (
            <View>
              <Text>Categoria: {item.idCategoria}</Text>
              <Text>Nome do produto: {item.nome}</Text>
              <Text>Valor do produtos: {item.precoDoProduto}</Text>
            </View>
          )}
        />
      </View>
    );
  }
};

export default Cart;
