import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    backgroundColor:'white'
  },
  image: {
    width: 200, 
    height: 200,
    marginVertical:15
  },
  containerSecundary: {
    flex:1,
    justifyContent:'center',  
    alignItems:'center',
    marginVertical:15,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 30,
    color: theme.colors.primary,
    marginBottom:15
  },
  price: {
    fontFamily: theme.fonts.medium,
    fontSize: 24,
    color: theme.colors.primary,
    marginBottom:20,
  },
  ContainerStar:{
    flexDirection:'row'
  }
});
