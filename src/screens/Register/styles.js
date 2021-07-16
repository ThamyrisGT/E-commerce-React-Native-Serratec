import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  containerSecundary: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 10
  },
  text: {
    marginTop: 20,
    fontFamily: theme.fonts.medium,
    fontSize: 23,
    color: theme.colors.secundary,
    textDecorationLine: 'underline',
    alignSelf: 'center'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  conteudoModal: {
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '70%',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: theme.colors.primary
  },
  textModal: {
    color: '#fff',
    fontFamily: theme.fonts.medium,
    color: theme.colors.secundary,

  },
});
