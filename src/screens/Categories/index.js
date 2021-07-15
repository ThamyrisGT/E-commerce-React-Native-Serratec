import React, {useState, useEffect} from 'react';
import {View, Text, FlatList,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import getProducts from '../../services/apiProdutos';
import Card from '../../components/Card';
import HeaderMain from '../../components/headerMain';
import Button from '../../components/Button'


const Categories = ({navigation}) => {

  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [caId, setCatID] = useState(1);
  
  const carregarProdutos = async () => {
    if (loading) return;
    setLoading(true);
    const products = await getProducts();
    const products2 =  products.filter((item)=> { return item.idCategoria==caId})
    setProductsList(products2);
    setLoading(false);
  };

  useEffect(() => {
    carregarProdutos();
  }, [caId]);

  

  return (
    <>
        <HeaderMain/>
        <View style={{height:70,flexDirection:'row', justifyContent:'space-evenly',backgroundColor:'white'}}>
          <Button 
          title='Importados'
          continuar={()=>{setCatID(2)}}
          />
          <Button 
          title='Nacionais'
          continuar={()=>{setCatID(3)}}
          />
          <Button 
          title='Frete Gratis'
          continuar={()=>{setCatID(1)}}
          />

        </View>
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

export default Categories;