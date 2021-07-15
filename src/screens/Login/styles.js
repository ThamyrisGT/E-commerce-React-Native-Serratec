import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  containerIntern: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerInternFooter: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  input: {
    minWidth: '100%',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20
  },
  inputSelect: {
    minWidth: '100%',
    borderColor: 'black',
    borderWidth: 5,
    borderColor: theme.colors.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20
  },
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: 22,
    color: theme.colors.secundary,
    textDecorationLine: 'underline',
  },
});
