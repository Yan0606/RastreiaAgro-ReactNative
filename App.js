import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Title from './src/components/title';
import Main from './src/components/main';
import { StyleSheet } from 'react-native';
import Login from './src/components/pages/login/index';
import Cadastro from './src/components/pages/cadastro/index';
import CadastroPropriedade from './src/components/pages/cadastroPropriedade/index';
import Obrigado from './src/components/pages/obrigado';
import Menu from './src/components/pages/menu/menu';
import GerenciamentoSafra from './src/components/pages/safra/gerenciamentoSafra/gerenciamentoSafra';
import MenuConfiguracao from './src/components/pages/menuConfiguracao/menuConfiguracao';
import GerenciamentoSafra2 from './src/components/pages/safra/gerenciamentoSafra2/gerenciamentoSafra2';
import EditarSafra from './src/components/pages/safra/editarSafra/safra';
import NovoTalhao from './src/components/pages/safra/novoTalhao/novoTalhao';
import { SafeAreaProvider, SafeAreaInsetsContext } from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => <View style={{ paddingTop: insets.top, ...styles.container }}>
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

function GerenciamentoSafraScreen({navigation}) {
  return (
    <GerenciamentoSafra />
  );
}

function GerenciamentoSafra2Screen({navigation}) {
  return (
    <GerenciamentoSafra2 />
  );
}

function MenuConfiguracaoScreen({navigation}) {
  return (
    <MenuConfiguracao />
  );
}

function EditarSafraScreen({navigation}) {
  return (
    <EditarSafra />
  );
}

function NovoTalhaoScreen({navigation}) {
  return (
    <NovoTalhao />
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
          <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="GerenciamentoSafra" component={GerenciamentoSafraScreen} options={{ headerShown: false}} />
          <Stack.Screen name="GerenciamentoSafra2" component={GerenciamentoSafra2Screen} options={{ headerShown: false}} />
          <Stack.Screen name="MenuConfiguracao" component={MenuConfiguracaoScreen} options={{ headerShown: false}} />          
          <Stack.Screen name="EditarSafra" component={EditarSafraScreen} options={{ headerShown: false}} />
          <Stack.Screen name="NovoTalhao" component={NovoTalhaoScreen} options={{ headerShown: false}} />
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