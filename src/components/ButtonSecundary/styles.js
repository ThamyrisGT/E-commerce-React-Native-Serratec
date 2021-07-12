import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.secundary,
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 4,
  },
  button: {
    width: '100%',
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: 22,
    textAlign: 'center',
    color: theme.colors.secundary,
  },
});
