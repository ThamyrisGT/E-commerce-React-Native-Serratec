import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:"white",
  },
  containerPrincipal:{
    height:"90%",
    width:'90%',
    flexDirection:'column',
    alignSelf:'center',
    marginTop:20,
    
  },
  viewSuperior:{
      flex:3,
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent:'space-between'
  },
  viewSuperiorComprar:{
      flex:1,
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center'
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
      justifyContent:'flex-start',   
  },
  image:{
    width:200,
    height:200
  },
  linhaDivisoria:{
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
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
  containerButtom:{
    flex:2,
    justifyContent:'flex-start',
    alignItems:'center'
  }

});
