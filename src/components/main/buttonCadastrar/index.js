import React from "react";
import { View, TouchableOpacity, Text } from "react-native"; // Importando TouchableOpacity para criar um botão
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export default function ButtonCadastrar() { 
    const navigation = useNavigation();
    const cadastro = () => {
        navigation.navigate('Cadastro');
    }
    
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => { cadastro() }}>
                <Text style={styles.text}>CADASTRAR-SE</Text>
            </TouchableOpacity>
        </View>
    )
}