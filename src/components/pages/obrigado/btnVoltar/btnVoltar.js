import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import styles from "./style"
import { useNavigation } from '@react-navigation/native';


export default function BtnVoltar() {
    const navigation = useNavigation();
    const cadastroPropriedade = () => {
        navigation.navigate('CadastroPropriedade');
    }
    return (
        <View>
            <TouchableOpacity style={styles.touch} onPress={() => { cadastroPropriedade() }}>
                <Image style={styles.btnVoltar}
                    source={require('../../../../img/btnVoltar.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

