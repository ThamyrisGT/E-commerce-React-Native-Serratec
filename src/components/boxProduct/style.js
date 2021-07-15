import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    conatainerPrincipal:{
        height:"85%",
        width:'90%',
        flexDirection:'column',
        alignSelf:'center',
        marginTop:20
    },
    viewSuperior:{
        flex:3,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    viewSuperiorComprar:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    textoProduto:{
        fontSize:25,
        marginTop:0,
    },
    textoPreco:{
        fontSize:20,
        marginTop:10
    },
    viewInferior:{
        flex:3,
        backgroundColor:'#fff'
    },
    linhaDivisoria:{
        borderTopWidth:2,
        borderTopColor:'#8a2be2',
        width:'95%',
        alignSelf:'center'
    },
    textoDescricao:{
        fontSize:20,
        textAlign:'justify',
        marginVertical:10,
        marginHorizontal:15
    },

})
export default Styles;