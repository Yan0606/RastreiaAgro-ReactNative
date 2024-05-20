import React from 'react';
import styles from "./style"
import { View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Logo from './logo/logo';
import Title from './title/title';
import Main from './main/main';

 

export default Login = () => {
  return (
    <View style={styles.container}>
      <Logo/>
      <Title/>
      <Main/>
    </View>
  );
}
