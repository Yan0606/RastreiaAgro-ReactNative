import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function Label() {
    return (
        <View>
            <Text style={styles.label}>
                Talhões registrados
            </Text>
        </View>
    )
}