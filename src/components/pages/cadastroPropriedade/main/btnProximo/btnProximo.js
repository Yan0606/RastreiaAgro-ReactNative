import React from "react";
import { View, TouchableOpacity, Text } from "react-native"; // Importando TouchableOpacity para criar um botão
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export default function BtnProximo() { 

    const navigation = useNavigation();
    const obrigado = () => {
        navigation.navigate('Obrigado');
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => { obrigado() }}>
                <Text style={styles.text}>PROXIMO</Text>
            </TouchableOpacity>
        </View>
    )
}