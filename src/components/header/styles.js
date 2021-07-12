import {ImageBackground, StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  screen: {
    fontFamily: theme.fonts.semibold,
    fontSize: 22,
    color: theme.colors.titleblack,
    marginHorizontal: 60,
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: 22,
    color: theme.colors.primary,
  },
});
