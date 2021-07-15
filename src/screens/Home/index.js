import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';
import { getProducts, setProdutos } from '../../repository/storage';
import theme from '../../global/theme';
import Card from '../../components/Card';
import { findProdutos } from '../../services/realm'
import Produto from '../../model/Produto';

const Home = ({ navigation }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregarProdutos = async () => {
    if (loading) return;
    setLoading(true);
    const products = await getProducts();
    setProductsList(products);
    salvarProdutos(products);
    setLoading(false);
  };

  const salvarProdutos = async (produtos) => {
    const realm = await findProdutos();
    try {
      realm.write(() => {
        produtos.forEach(prod => {
          realm.create('Produto', new Produto(prod), 'modified')
        })
      })
    } catch (error) {
      console.log('deu ruim')
      console.log(error)
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id}
      data={productsList}
      //ItemSeparatorComponent
      renderItem={({ item }) => (

        <Card caminhoImagem={item.url} nome={item.nome} preco={item.preco} />

      )}
    />
  );
};

export default Home;
