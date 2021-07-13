import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  input: {
    minWidth: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
  inputSelect: {
    minWidth: '100%',
    borderColor: 'black',
    borderBottomWidth: 5,
    borderBottomColor: theme.colors.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 22,
    fontFamily: theme.fonts.medium,    
  },
});
