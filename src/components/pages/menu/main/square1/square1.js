import React from "react"
import { View, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import styles from "./style"

export default function square1() {
    const navigation = useNavigation();
    const gerenciamentoSafra = () => {
        navigation.navigate('GerenciamentoSafra');
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => {gerenciamentoSafra() }}>
            <View style={styles.grid}>
                <View style={styles.square}>
                    <Image style={styles.icon}
                        source={require('../../../../../img/safra.png')}>
                    </Image>
                    <Text style={styles.title}>
                        Safra
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

