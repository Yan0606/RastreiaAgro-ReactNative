import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function labelCadastro(){
    return(
        <View >
            <Text style={styles.textLabelCadastro}>
            Sou novo, ainda não tenho cadastro
            </Text>
        </View>
    )
}