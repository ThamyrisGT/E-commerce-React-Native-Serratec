import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:"white",
   padding:15
  },
  containerPrincipal:{
    height:"90%",
    width:'90%',
    alignSelf:'center',
    marginTop:20,
    
  },
  viewSuperior:{
      flex:3,
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
  },
  viewSuperiorComprar:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
  },
  textoProduto:{
      fontSize:25,
      fontFamily:theme.fonts.bold,
      color:theme.colors.primary,
      alignContent:'center'
  },
  textoPreco:{
      fontSize:25,
      marginTop:10,
      fontFamily:theme.fonts.medium,
      color:theme.colors.primary
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
      width:'95%'
  },
  textoDescricao:{
      height:'90%',
      marginTop:10,
      marginHorizontal:15,
      fontSize:25,
      textAlign:'justify',
      fontFamily:theme.fonts.medium,
      color:theme.colors.primary
  },
  containerButtom:{
    flex:1,
    width: '90%',
    alignSelf:'center',
  },
  containerFooter:{
    flex:5
  }

});
