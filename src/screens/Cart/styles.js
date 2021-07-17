import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'white',
    padding:20
  },
  containerCard:{
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary, 
    alignItems:'center',
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  image: {
    width: 200, 
    height: 200
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    color: theme.colors.primary,
    marginBottom:15,
  },
  price: {
    fontFamily: theme.fonts.medium,
    fontSize: 24,
    color: theme.colors.primary,
    marginBottom:20,
  },
  containerInfo:{
    alignItems: 'center',
    marginHorizontal: 25
  },
  containerAjuste:{
    flexDirection:'row',
    width:'80%'
  },
  textQtd:{
    textAlign: 'center', 
    marginHorizontal:6,
    fontSize: 25, 
    fontFamily:theme.fonts.bold,
    color: theme.colors.primary
  },
  containerIcon:{
    width: '100%',
  },
  iconClose:{
    alignSelf:'flex-end',
    color:theme.colors.secundary
  },
  containerFooter:{
    width:'80%', 
    alignSelf:'center', 
    marginBottom:200
  },
  textFooter:{
    marginTop:20,
    textAlign:'center',
    fontSize:25, 
    color:theme.colors.secundary,
    fontFamily:theme.fonts.bold
  }
});
