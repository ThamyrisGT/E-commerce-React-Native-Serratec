import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { styles } from './styles';
import getProducts from '../../services/apiProdutos';
import Card from '../../components/Card';
import HeaderMain from '../../components/headerMain';


const Home = ({ navigation }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregarProdutos = async () => {
    if (loading) return;
    setLoading(true);
    const products = await getProducts();
    setProductsList(products);
    setLoading(false);
  };

  // const salvarProdutos = async (produtos) => {
  //   const realm = await findProdutos();
  //   try {
  //     realm.write(() => {
  //       produtos.forEach(prod => {
  //         realm.create('Produto', new Produto(prod), 'modified')
  //       })
  //     })
  //   } catch (error) {
  //     console.log('deu ruim ao salvar os produtos')
  //     console.log(error)
  //   }
  //   finally {
  //     realm.close();
  //   }
  // }

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
              preco={`R$ ${item.preco}`}
              avancar={() =>
                navigation.navigate('ProductDetails', {
                  nome: item.nome,
                  preco: item.preco,
                  descricao: item.descricao,
                  imagem: item.url,
                  idProduto: item.id
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
