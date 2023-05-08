import { View, Text, Image, StyleSheet } from "react-native";


export default function JogoDetalhes( { descricao, foto, valor, console, conteudo }) {

return <View>
        <View style={estilos.informacoes}>
            <Text style={estilos.nome}>{descricao}</Text>
        </View>
            <View>
                <Text style={estilos.conteudo}>{conteudo}</Text>
            </View>
            <View style={estilos.detalhes}>
                <Text style={estilos.plataforma}>Preço:</Text>
                <Text style={estilos.preco}>{valor}</Text>
            </View> 
    </View>
}

const estilos = StyleSheet.create ({
    cartao: {
        backgroundColor: '#F6F6FF',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        elevation: 4,
    },
    imagem: {
        width: 400,
        height: 200,
        borderRadius: 6,
        marginVertical: 8,
        marginLeft: 6,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
        alignItems: 'center',
    },
    nome: {
        fontSize: 30,
        lineHeight: 50,
        fontWeight: 'bold',
        color: '#4dab8c'
    },  
    detalhes: {
        marginVertical:30,
        alignItems:"center",
        backgroundColor:'#4dab8c',
        borderRadius:10,
        marginLeft: 90,
        marginRight: 90
    },
    plataforma: {
        fontSize: 18,
        lineHeight: 20,
        justifyContent: 'space-around',
        color: '#e6e8e3',
        marginTop: 3,
    },
    preco: {
        fontSize: 30,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#e6e8e3'
    },
    conteudo:{
        fontSize: 13,
        textAlign: 'center'
    }
})