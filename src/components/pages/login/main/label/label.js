import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';


export default function label() {
    const navigation = useNavigation();
    const home = () => {
        navigation.navigate('Home');
    }
    return (
        <View >
            <TouchableOpacity onPress={() => { home() }}>
                <Text style={styles.textLabelCadastro}>
                    Entre ou Cadastre-se
                </Text>
            </TouchableOpacity>
        </View>
    )
}