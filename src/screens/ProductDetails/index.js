import React from 'react';
import {View, Text,Image,StatusBar} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button';
import Header from '../../components/header';
const ProductDetails = ({navigation, route}) => {
    
  //const[nome,preco,descricao]= route.params;
  const nome = route.params.nome
  const preco = route.params.preco
  const descricao = route.params.descricao
  const imagem = route.params.imagem


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent />
      <Header
          text={'Voltar'}
          screen={'Cadastro'}
          voltar={() => navigation.navigate('Home')} />
      <View>
          <View style={styles.containerPrincipal}>

              <View style={styles.viewSuperior}>
                  <Image source={{uri:imagem}} style={styles.image}  />
                  <View style={styles.viewSuperiorComprar}>
                    <Text style={styles.textoProduto}>{nome}</Text>
                    <Text style={styles.textoPreco}>{preco}</Text> 
                  </View>
              </View>
              <View style={styles.viewInferior}>
                  <View style={styles.linhaDivisoria}/>
                  <View style={{flex:5}}>
                     <Text style={styles.textoDescricao}>{descricao}</Text>
                  </View>
                  <View style={styles.containerButtom}>
                       <Button 
                       title="Adicionar ao Carrinho" 
                       activeOpacity={0.7} 
                       continuar={() => navigation.navigate('Cart')}/>
                  </View> 
              </View>
          </View>  
      </View>
    </View>
  );
};

export default ProductDetails;
