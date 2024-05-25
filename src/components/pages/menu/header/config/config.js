import React from "react"
import { View, Image } from "react-native"
import styles from "./style"

export default function Config() {
    return (
        <View>
            <Image style={styles.logo}
                source={require('../../../../../img/config.png')}
            />
        </View>
    )
}

