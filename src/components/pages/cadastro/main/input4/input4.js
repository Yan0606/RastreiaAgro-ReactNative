import React from 'react';
import { TextInput, View } from 'react-native';
import styles from "./style";


export default function Input4 (){
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
    </View>
  );
};

