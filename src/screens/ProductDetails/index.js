import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import Header from '../../components/header';
import { findClienteStorage } from '../../repository/storage'
import api from '../../services/api'
const ProductDetails = ({ navigation, route }) => {
  const nome = route.params.nome;
  const preco = route.params.preco;
  const descricao = route.params.descricao;
  const imagem = route.params.imagem;
  const idProduto = route.params.idProduto;

  const pedidoProduto = async () => {
    let cliente = await findClienteStorage();
    const pedido = cliente.idPedido;
    console.log(pedido)
    if (pedido == 0) {
      const novoPedido = {
        idCliente: cliente.id,
        produtosDoPedido: [
          {
            idProduto: idProduto,
            quantidade: 1
          }
        ]
      }
      api.post('pedido', novoPedido)
        .then(response => {
          const resposta = response.data;
          console.log(resposta)
          cliente.idPedido = parseInt(resposta.idPedido)
          try {
            realm.write(() => {
              realm.create('Cliente', cliente, 'modified')
            })
            console.log('deu bom ao criar o pedido');
            navigation.navigate('Cart');
          } catch (error) {
            console.log('deu ruim ao criar o pedido')
            console.log(error)
          }
          finally {
            realm.close();
          }
        })
        .catch(error => {
          console.log(error)
        })
    } else {

    }
  }

  /**
   * {
  "idCliente": 0,
  "produtosDoPedido": [
    {
      "idPedido": 0,
      "idProduto": 0,
      "quantidade": 0
    }
  ]
}
   */

  return (
    <View style={styles.container}>
      <Header
        text={'Voltar'}
        screen={'Detalhes'}
        voltar={() => navigation.navigate('Home')}
      />
      <View>
        <View style={styles.containerPrincipal}>
          <View style={styles.viewSuperior}>
            <Image source={{ uri: imagem }} style={styles.image} />
            <View style={styles.viewSuperiorComprar}>
              <Text style={styles.textoProduto}>{nome}</Text>
              <Text style={styles.textoPreco}>R$ {preco}</Text>
            </View>
          </View>
          <View style={styles.viewInferior}>
            <View style={styles.containerFooter}>
              <Text style={styles.textoDescricao}>{descricao}</Text>
            </View>
            <View style={styles.containerButtom}>
              <Button
                title="Adicionar ao Carrinho"
                activeOpacity={0.7}
                continuar={() => pedidoProduto()}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
