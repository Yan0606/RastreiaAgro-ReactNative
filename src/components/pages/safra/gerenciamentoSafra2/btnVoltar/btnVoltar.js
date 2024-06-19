import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import styles from "./style"
import { useNavigation } from '@react-navigation/native';


export default function BtnVoltar() {
    const navigation = useNavigation();
    const gerenciamentoSafra = () => {
        navigation.navigate('GerenciamentoSafra');
    }
    return (
        <View>
            <TouchableOpacity style={styles.touch} onPress={() => { gerenciamentoSafra() }}>
                <Image style={styles.btnVoltar}
                    source={require('../../../../../img/btnVoltar.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

