import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
    marginTop: 100,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
    flexDirection: 'row',
    flexWrap: 'wrap', 
  },
  image: {
    width: 150,
    height: 200,
    marginTop: 35,
    alignSelf: 'flex-start',
  },
  containerSecundary: {
    justifyContent:'center',
    marginLeft:15,
    backgroundColor:'red'
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 22,
    color: theme.colors.primary,
  },
  price: {
    fontFamily: theme.fonts.medium,
    fontSize: 22,
    color: theme.colors.primary,
    marginBottom:20,
    textAlign:'center'
  },
});
