import { Text, StyleSheet } from "react-native"

export default function MelhoresJogos() {
    return <Text style={estilos.cartao}>MelhoresJogos</Text>
}

const estilos = StyleSheet.create ({
    cartao:{
        backgroundColor:"#F6F6F6",
        marginHorizontal: 25,
        borderRadius:80,
        elevation: 50,
        marginTop:10,
        textAlign:"center",
        fontSize: 25,
    }
})
