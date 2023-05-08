import { Image, Text, View, StyleSheet } from "react-native";

import logo from '../../../../assets/logo1.png';
import useTopo from "../../../hooks/useTopo";

export default function Topo () {
    const [boasVindas, legenda] = useTopo();

    return <View style={estilos.topo}>
        <Image source={logo} style={estilos.logo}/>
        <Text style={estilos.boasVindas}>{boasVindas}</Text>
        <Text style={estilos.legenda}>{legenda}</Text>
    </View>
}

const estilos = StyleSheet.create ({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 5,
        marginLeft: 150
    },
    boasVindas: {
        marginTop: 12,
        fontSize: 28,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646',
        textAlign: 'center',
    },
    legenda: {
        color: "#A3A3A3",
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
    },

})