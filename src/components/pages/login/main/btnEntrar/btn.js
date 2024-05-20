import React from "react";
import { View, TouchableOpacity, Text } from "react-native"; // Importando TouchableOpacity para criar um botão
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export default function Btn() { 

    const navigation = useNavigation();
    const login = () => {
        navigation.navigate('Login');
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => { login() }}>
                <Text style={styles.text}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}