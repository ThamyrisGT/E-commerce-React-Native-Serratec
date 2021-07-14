import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {styles} from './styles';
import {getProducts} from '../../repository/storage';
import theme from '../../global/theme';
import Card from '../../components/Card';

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
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id}
      data={productsList}
      //ItemSeparatorComponent
      renderItem={({item}) => (
        
           <Card caminhoImagem={item.url} nome={item.nome} preco={item.preco} /> 
    
      )}
    />
  );
};

export default Home;
