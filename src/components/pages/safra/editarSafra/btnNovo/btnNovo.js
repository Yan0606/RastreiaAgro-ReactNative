import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import styles from "./style"
import { useNavigation } from '@react-navigation/native';


export default function BtnNovo() {
    const navigation = useNavigation();
    const novoTalhao = () => {
        navigation.navigate('NovoTalhao');
    }
    return (
        <View>
            <TouchableOpacity style={styles.btnNovo} onPress={() => { novoTalhao() }}>
                <Text style={styles.textBtn}>Novo  +</Text>
            </TouchableOpacity>
        </View>
    )
}

