import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './src/components/logo'; 
import Title from './src/components/title'; 
import Main from './src/components/main';
import { StyleSheet } from 'react-native';
import Login from './src/components/pages/login/index';
import Cadastro from './src/components/pages/cadastro/index';
import CadastroPropriedade from './src/components/pages/cadastroPropriedade/index';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Logo/>
        <Title/>
        <Main/>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <Login/>
  );
}
function CadastroScreen({ navigation }) {
  return (
    <Cadastro/>
  );
}

function CadastroPropriedadeScreen({navigation}) {
  return (
    <CadastroPropriedade/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="CadastroPropriedade" component={CadastroPropriedadeScreen} />
        {/* novas telas adicionar aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18603A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;