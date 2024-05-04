import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './src/components/logo'; 
import Title from './src/components/title'; 
import Main from './src/components/main'
 

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Title/>
      <Main/>
    </View>
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