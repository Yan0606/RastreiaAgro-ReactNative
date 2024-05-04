import React from "react";
import { View, TouchableOpacity, Text } from "react-native"; // Importando TouchableOpacity para criar um botão
import styles from "./style";

export default function Button() { 
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.text}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}