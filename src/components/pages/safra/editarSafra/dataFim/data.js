import React from "react"
import { View, Text, TextInput } from "react-native"
import styles from "./style"
import { useNavigation } from '@react-navigation/native';


export default function DataFim() {
    return (
        <View style={styles.container}>
           <Text style={styles.text}>Data Fim</Text>
            <TextInput style={styles.inputData} placeholder="26/06/2024"></TextInput>
        </View>
    )
}