import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import useJogos from "../../../hooks/useJogos";
import Jogo from "./Jogo";


export default function Jogos ({topo : Topo}) {
    const [titulo, lista] = useJogos();
    const navigation = useNavigation();

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }
    return <>       
        <FlatList
            data={lista}
            renderItem={({ item }) => <Jogo {...item}
            aoPressionar={() => { navigation.navigate("JogoDescricao", item)}} />}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={TopoLista}
        /> 
    </>
}

const estilos = StyleSheet.create ({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginTop: 16,
        marginHorizontal: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})