import React from "react";
import { View, TouchableOpacity, Text } from "react-native"; // Importando TouchableOpacity para criar um botão
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export default function BtnProximo() { 

    const navigation = useNavigation();
    const cadastroPropriedade = () => {
        navigation.navigate('CadastroPropriedade');
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => { cadastroPropriedade() }}>
                <Text style={styles.text}>PROXIMO</Text>
            </TouchableOpacity>
        </View>
    )
}