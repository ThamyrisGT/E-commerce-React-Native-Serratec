import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
   width: '100%',
   height: '30%',
   backgroundColor:'white'
  
  },
  header: {
    height: "50%",
    width: "100%",
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: 'center'
  },
  img: {
    width: "55%",
    height: "45%",
    alignSelf:'flex-start',
    marginTop:30,
    marginLeft:15
  },
  containerInput: {
    width:'80%',
    alignSelf: 'center',
    marginTop: "6%"
  },
  containerLogin:{
    flexDirection:'row',
    alignSelf:'flex-end',
    marginRight: 15,
  },
  textLogin:{
    fontSize:20,
    fontFamily:theme.fonts.medium,
    color:theme.colors.secundary
  }
});
