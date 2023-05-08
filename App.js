import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
//import Home from './src/telas/Home';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppRotas />
      <StatusBar />
    </SafeAreaView>
  );
}

