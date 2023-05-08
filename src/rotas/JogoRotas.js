import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../telas/Home";
import JogoDescricao from "../telas/JogoDescricao";

const Stack = createNativeStackNavigator();

export default function JogoRotas() {
    return(
        <Stack.Navigator screenOptions={ {headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="JogoDescricao" component={JogoDescricao} />
        </Stack.Navigator>
    );
}
