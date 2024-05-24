import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './src/components/logo';
import Title from './src/components/title';
import Main from './src/components/main';
import { StyleSheet } from 'react-native';
import Login from './src/components/pages/login/index';
import Cadastro from './src/components/pages/cadastro/index';
import CadastroPropriedade from './src/components/pages/cadastroPropriedade/index';
import Obrigado from './src/components/pages/obrigado';
import Menu from './src/components/pages/menu/menu';
import { SafeAreaProvider, SafeAreaInsetsContext } from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => <View style={{ paddingTop: insets.top, ...styles.container }}>
        <Logo />
        <Title />
        <Main />
      </View >}
    </SafeAreaInsetsContext.Consumer>
  );
}

function LoginScreen({ navigation }) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => <Login style={{ paddingTop: insets.top }} />}
    </SafeAreaInsetsContext.Consumer >
  );
}
function CadastroScreen({ navigation }) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => <View style={{ paddingTop: insets.top, ...styles.container }}>
        <Cadastro />
      </View >}
    </SafeAreaInsetsContext.Consumer>
  );
}

function CadastroPropriedadeScreen({ navigation }) {
  return (
    <CadastroPropriedade />
  );
}

function ObrigadoScreen({ navigation }) {
  return (
    <Obrigado />
  );
}

function MenuScreen({ navigation }) {
  return (
    <Menu />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CadastroPropriedade" component={CadastroPropriedadeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Obrigado" component={ObrigadoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          {/* novas telas adicionar aqui */}

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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