import React from "react";
import { View, TouchableOpacity, Text } from "react-native"; // Importando TouchableOpacity para criar um botão
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export default function Btn2() { 

    const navigation = useNavigation();
    const gerenciamentoSafra2 = () => {
        navigation.navigate('GerenciamentoSafra2');
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => { gerenciamentoSafra2() }}>
                <Text style={styles.text}>GERENCIAR EXISTENTES</Text>
            </TouchableOpacity>
        </View>
    )
}