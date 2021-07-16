import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
   flex:1,
  //  justifyContent: "flex-end",
  //   alignItems: "center",
  padding: 20
  },
    containerImg:{
    width: "100%",
    height: "10%",   
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
   
  },
  img: {
    width: "90%",
    height: "90%",
    resizeMode: 'contain',
    
  },
  inputPay: {
    marginTop: "5%",
    justifyContent: "space-between"
  },
  texto: {
    textAlign: "center",
    fontSize: 22,
    fontFamily:theme.fonts.medium,
    color:theme.colors.primary

}
});
