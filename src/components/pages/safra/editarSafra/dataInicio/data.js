import React from "react"
import { View, Text, TextInput } from "react-native"
import styles from "./style"
import { useNavigation } from '@react-navigation/native';


export default function DataInicio() {
    return (
        <View style={styles.container}>
           <Text style={styles.text}>Data Inicio</Text>
            <TextInput style={styles.inputData} placeholder="26/04/2024"></TextInput>
        </View>
    )
}