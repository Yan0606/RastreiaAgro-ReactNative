import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";

 

export default Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello world
      </Text>
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
  title:{
    color: '#fff'
  }
});