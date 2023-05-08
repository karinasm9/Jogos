import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import JogoDetalhes from "./componentes/JogoDetalhe";

export default function JogoDescricao({navigation}) {
    const route = useRoute();
    const { nome, detalhes, imagem } = route.params;

    const TopoLista = () => {
        return <>
            <TouchableOpacity onPress={() => navigation.goBack ()}>
                <Image style={estilos.imagem} source={imagem}/>
            </TouchableOpacity>
        </>
    }
//criar botão aqui

        return <FlatList 
            ListHeaderComponent={TopoLista}
            data={detalhes}
            renderItem={({ item }) => <JogoDetalhes {...item} jogo={{nome}}
            />}
    />
}

const estilos = StyleSheet.create({
    nome: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    imagem: {
        width: 400,
        height: 250,
        marginLeft: 6
    }
})