import React from 'react';
import { TextInput, View } from 'react-native';
import styles from "./style";


export default function Input3 (){
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        keyboardType="numeric"
      />
    </View>
  );
};

