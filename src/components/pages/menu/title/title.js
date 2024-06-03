import React from "react"
import { View, Image, Text } from "react-native"
import styles from "./style"

export default function Title() {
    return (
        <View style={styles.container}>
            <Image style={styles.iconeAgricultor}
                source={require('../../../../img/iconAgricultor.png')}
            />
            <Text style={styles.titulo}>
                Nome do agricultor
            </Text>
        </View>
    )
}

