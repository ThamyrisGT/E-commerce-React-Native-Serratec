import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {getProducts} from '../../repository/storage';
import Card from '../../components/Card';
import HeaderMain from '../../components/headerMain';
import Button from '../../components/Button'

const Home = ({navigation}) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregarProdutos = async () => {
    if (loading) return;
    setLoading(true);
    const products = await getProducts();
    setProductsList(products);
    setLoading(false);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <>
        <HeaderMain/>
        <FlatList
      style={styles.container}
      keyExtractor={item => item.id}
      data={productsList}
      renderItem={({item}) => (
           <>
           <Card caminhoImagem={item.url} nome={item.nome} preco={item.preco} 
           avancar={() => navigation.navigate('ProductDetails',{
             nome:item.nome,
             preco:item.preco,
             descricao:item.descricao,
             imagem:item.url
           })}
           /> 
           </>
      )}
    />
    </>
  );
};

export default Home;
