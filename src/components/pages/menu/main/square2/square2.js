import React from "react"
import { View, Image, Text } from "react-native"
import styles from "./style"

export default function square2() {
    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <View style={styles.square}>
                    <Image style={styles.icon}
                        source={require('../../../../../img/caderno.png')}>
                    </Image>
                    <Text style={styles.title}>
                        Caderno
                    </Text>
                </View>
            </View>
        </View>
    )
}

