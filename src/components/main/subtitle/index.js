import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function subtitle(){
    return(
        <View >
            <Text style={styles.textSubtitle}>
                Já tenho cadastro
            </Text>
        </View>
    )
}