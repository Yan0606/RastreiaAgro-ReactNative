import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function label(){
    return(
        <View >
            <Text style={styles.textLabelCadastro}>
                Entre ou Cadastre-se
            </Text>
        </View>
    )
}