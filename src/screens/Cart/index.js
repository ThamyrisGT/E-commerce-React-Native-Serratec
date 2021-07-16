import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';
import apiCarrinho from '../../services/apiCarrinho';
import Header from '../../components/header';
import Button from '../../components/Button';
import IconClose from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/Entypo';
import IconMin from 'react-native-vector-icons/Entypo';
import theme from '../../global/theme';
// import { findClienteStorage } from '../../repository/storage'
import { findCliente } from '../../services/realm';

const Cart = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [pedidoAtual, setPedidoAtual] = useState([{}]);

  const findClienteStorage = async () => {
    const realm = await findCliente();
    const realmCliente = realm.objects('Cliente');
    let clienteAtual = {};
    realmCliente.forEach(item => clienteAtual = item);
    const pedido = clienteAtual.idPedido;
    console.log(pedido)
    obterPedido(pedido)
  }

  const obterPedido = async (pedido) => {
    if (pedido != 0) {
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
        obterPedido(pedidoAtual.id);
      })
      .catch(erro => {
        console.log(erro);
      });
  };
  const deletaProdutoPedido = id => {
    apiCarrinho
      .excluirProdutoCarrinho(id)
      .then(resposta => {
        console.log('deu bom');

        obterPedido(pedidoAtual.id);
      })
      .catch(error => {
        console.log('deu ruim');
      });
  };

  useEffect(() => {
    obterPedido(pedidoAtual.id);
  }, []);



  useEffect(() => {
    return navigation.addListener('focus', () => {
      findClienteStorage();
    })
  }, [navigation])

  if (pedidoAtual.id == 0) {
    return (
      <View>
        <Header
          text={'Voltar'}
          screen={'Carrinho'}
          voltar={() => navigation.navigate('DetailsCategories')}
        />
        <Text>Sem Produtos no Carrinho</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Header
          text={'Voltar'}
          screen={'Carrinho'}
          voltar={() => navigation.goBack()}
        />
        <FlatList
          keyExtractor={item => item.id}
          data={produtos}
          renderItem={({ item, index }) => (
            <View style={styles.containerCard}>
              <Image style={styles.image} source={{ uri: item.imagemProduto }} />
              <View style={styles.containerInfo}>
                <Text style={styles.title}>{item.nomeProduto}</Text>
                <Text style={styles.price}>Valor:{item.precoDoProduto}</Text>
                <View style={styles.containerAjuste}>
                  <IconPlus
                    name="plus"
                    size={35}
                    color={theme.colors.secundary}
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
                  <Text style={styles.textQtd}>{item.quantidadeProdutos}</Text>
                  <IconMin
                    name="minus"
                    size={35}
                    color={theme.colors.secundary}
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
                </View>
              </View>
              <View style={styles.containerIcon}>
                <IconClose
                  name="close-outline"
                  size={35}
                  style={styles.iconClose}
                  onPress={() => {
                    deletaProdutoPedido(item.id);
                  }}
                />
              </View>
            </View>
          )}
        />
        <View style={styles.containerFooter}>
          <Text style={styles.textFooter}>
            Valor Total: {produtos?.length > 0 ? pedidoAtual.valorTotal : 0}
          </Text>
          <Button title="Finalizar Pedido"
            continuar={() => navigation.navigate('Payments')}
          />
        </View>
      </View>
    );
  }
};

export default Cart;
