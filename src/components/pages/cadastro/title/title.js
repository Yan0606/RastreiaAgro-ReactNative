import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function Title() {
    return (
        <View>
            <Text style={styles.textTitle}>
                INFORMAÇÕES SOBRE O RESPONSÁVEL PELO EMPREENDIMENTO
            </Text>
        </View>
    )
}