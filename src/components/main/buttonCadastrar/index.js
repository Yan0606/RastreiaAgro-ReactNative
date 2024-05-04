import React from "react";
import { View, TouchableOpacity, Text } from "react-native"; // Importando TouchableOpacity para criar um botão
import styles from "./style";

export default function ButtonCadastrar() { 
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.text}>CADASTRAR-SE</Text>
            </TouchableOpacity>
        </View>
    )
}