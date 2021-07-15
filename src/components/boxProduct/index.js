import React from 'react';
import { View,Text,Image } from 'react-native';
import Button from '../Button/index'
import styles from './style';
const BoxProduct = ({navigation},props)=>{
    return(
       
       <View style={styles.conatainerPrincipal}>
          
          <View style={styles.viewSuperior}>
              <Image source={require('../../assets/images/aquaplay.jpeg')} resizeMode='contain' />
              <View style={styles.viewSuperiorComprar}>
                            <Text style={styles.textoProduto}>{props.nome}</Text>
                            <Text style={styles.textoPreco}>{props.preco}</Text>
                            <Button title="Comprar"  activeOpacity={0.7} cadastrar={() => navigation.navigate('Cart')}/>
              </View>
              
          </View>
          
          <View style={styles.viewInferior}>
              <View style={styles.linhaDivisoria}/>
              <View>
                    <Text style={styles.textoDescricao}>{props.descricao}</Text>
              </View>
          </View>
     </View>
    );
}
export default BoxProduct;