import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  input: {
    minWidth: '100%',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: theme.fonts.medium
  },
  inputSelect: {
    minWidth: '100%',
    borderColor: 'black',
    borderWidth: 5,
    borderColor: theme.colors.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: theme.fonts.medium,
    fontSize: 22
  },
  search:{
      alignSelf:'flex-end',
  }
});