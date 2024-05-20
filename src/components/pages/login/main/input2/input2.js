import React from 'react';
import { TextInput, View } from 'react-native';
import styles from "./style";


export default function Input2 (){
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        keyboardType="numeric"
        maxLength={14}
      />
    </View>
  );
};

