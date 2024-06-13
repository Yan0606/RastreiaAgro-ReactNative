import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function balaoConversa() {
    return (
        <View style={styles.container}>
        <View style={styles.balao}>
          <Text style={styles.texto}>Selecione se deseja editar ou cadastrar suas Safras</Text>
        </View>
        <View style={styles.seta} />
      </View>
    );
  };



