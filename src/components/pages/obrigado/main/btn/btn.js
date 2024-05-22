import React from "react";
import { View, TouchableOpacity, Text } from "react-native"; // Importando TouchableOpacity para criar um botão
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export default function Btn() { 

    const navigation = useNavigation();
    const home = () => {
        navigation.navigate('Home');
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => { home() }}>
                <Text style={styles.text}>VOLTAR PARA O INICIO</Text>
            </TouchableOpacity>
        </View>
    )
}