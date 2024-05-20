import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                Bem-Vindo ao Rastreia Agro
            </Text>
        </View>
    )
}