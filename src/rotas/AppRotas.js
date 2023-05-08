import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import MelhoresJogos from '../telas/MelhoresJogos';
import JogoRotas from "./JogoRotas";

const Tab = createBottomTabNavigator();

export default function AppRotas () {
    return(
        <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused  
                  ? 'albums-outline'  
                  : 'albums-outline';  
              } else if (route.name === 'MelhoresJogos') {  
                iconName = focused ? 'ios-list' : 'ios-list-outline';  
              }  
              return <Ionicons name={iconName} size={size} color={color} />;  
            },  
            tabBarActiveTintColor: 'gray',  
            tabBarInactiveTintColor: 'gray', 
          })}  
        > 
          <Tab.Screen name="Home" component={JogoRotas} /> 
          <Tab.Screen name="MelhoresJogos" component={MelhoresJogos} /> 
        </Tab.Navigator> 
      </NavigationContainer>
    );
}