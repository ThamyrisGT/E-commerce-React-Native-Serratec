import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  containerSecundary:{
    flex:1,
    marginVertical:15,
    marginHorizontal:10
  },
  text:{
    marginTop:20,
    fontFamily: theme.fonts.medium,
    fontSize: 24,
    color: theme.colors.secundary,
    textDecorationLine: 'underline',
    alignSelf:'center'
  }
});
