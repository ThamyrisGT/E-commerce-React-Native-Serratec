import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
   flex:1
  },

  conatainerPrincipal:{
    height:"90%",
    width:'90%',
    flexDirection:'column',
    alignSelf:'center',
    marginTop:20
  },
  viewSuperior:{
      flex:3,
      backgroundColor:'#fff',
      flexDirection:'row',
      justifyContent:'space-between'
  },
  viewSuperiorComprar:{
      flex:1,
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'#fff'
  },
  textoProduto:{
      fontSize:25,
      marginTop:0,
  },
  textoPreco:{
      fontSize:20,
      marginTop:10
  },
  viewInferior:{
      flex:5,
      backgroundColor:'#fff',
      // flexDirection:'column',
      justifyContent:'flex-start',
 

      
  },
  linhaDivisoria:{
      borderTopWidth:2,
      borderTopColor:'#8a2be2',
      width:'95%',
      alignSelf:'center'
  },
  textoDescricao:{
      height:'90%',
      backgroundColor:'#fff',
      fontSize:20,
      textAlign:'justify',
      marginTop:10,
      marginHorizontal:15
  },


});
