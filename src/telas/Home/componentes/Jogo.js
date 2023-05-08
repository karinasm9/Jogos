import { useReducer, useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";


export default function Jogo ({ nome, imagem, plataforma, estrelas, preco, aoPressionar }) {
    
    return <TouchableOpacity 
        style={estilos.cartao}
        onPress={aoPressionar} >
            
        <Image source={imagem} style={estilos.imagem}/>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
            </View>
            <View style={estilos.detalhes}>
                <Text style={estilos.plataforma}>{plataforma}</Text>
                <Text style={estilos.preco}>{preco}</Text>
            </View>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create ({
    cartao: {
        backgroundColor: '#F6F6FF',
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        elevation: 4,
    },
    imagem: {
        width: 80,
        height: 58,
        borderRadius: 6,
        marginVertical: 8,
        marginLeft: 12,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 15,
        lineHeight: 22,
        fontWeight: 'bold',
        marginLeft: 3,
    },
    plataforma: {
        fontSize: 12,
        lineHeight: 20
    },
    preco: {
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#FF4444'
    }
})