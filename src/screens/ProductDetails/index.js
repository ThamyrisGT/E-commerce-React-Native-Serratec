import React from 'react';
import {View, Text,Image} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button';
import BoxProduct from '../../components/boxProduct'
const ProductDetails = ({navigation},props) => {
  return (
    <View style={styles.container,{backgroundColor:'#d3d3d3'}}>
      {/* <Text> Detalhes do Pedido </Text>
      <Button title="Adicionar ao Carrinho" activeOpacity={0.7} cadastrar={() => navigation.navigate('Cart')}/> */}
      <View>

        {/* <BoxProduct/> */}

          <View style={styles.conatainerPrincipal}>

              <View style={styles.viewSuperior}>
                  <Image source={require('../../assets/images/aquaplay.jpg')} resizeMode='contain' />
                  <View style={styles.viewSuperiorComprar}>
                    <Text style={styles.textoProduto}>{props.nome}produto</Text>
                    <Text style={styles.textoPreco}>{props.preco}preço</Text>
                  
                  </View>

              </View>
              <View style={styles.viewInferior}>
                  <View style={styles.linhaDivisoria}/>
                  <View style={{flex:5}}>
                     <Text style={styles.textoDescricao}>{props.descricao}decricao do produto</Text>
                  </View>
                  <View style={{flex:2,justifyContent:'flex-start',alignItems:'center'}}>
                    
                       <Button  title="Adicionar ao Carrinho" activeOpacity={0.7} cadastrar={() => navigation.navigate('Cart')}/>
                    
                  </View>
                 

                
              </View>


          </View>
        
      </View>
    
    </View>
  );
};

export default ProductDetails;
