import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { styles } from './styles';
import { getProducts } from '../../repository/storage';
import Card from '../../components/Card';
import { findProdutos } from '../../services/realm'
import Produto from '../../model/Produto';
import HeaderMain from '../../components/headerMain';

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

    <>
      <HeaderMain
        entrar={() => navigation.navigate('Login')}
        cadastrar={() => navigation.navigate('Register')}
      />
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id}
        data={productsList}
        renderItem={({ item }) => (
          <>
            <Card
              caminhoImagem={item.url}
              nome={item.nome}
              preco={item.preco}
              avancar={() =>
                navigation.navigate('ProductDetails', {
                  nome: item.nome,
                  preco: item.preco,
                  descricao: item.descricao,
                  imagem: item.url,
                })
              }
            />
          </>
        )}
      />
    </>
  );
};

export default Home;
