import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import styles from "./style"
import { useNavigation } from '@react-navigation/native';


export default function BtnVoltar() {
    const navigation = useNavigation();
    const cadastro = () => {
        navigation.navigate('Cadastro');
    }
    return (
        <View>
            <TouchableOpacity style={styles.touch} onPress={() => { cadastro() }}>
                <Image style={styles.btnVoltar}
                    source={require('../../../../img/btnVoltar.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

