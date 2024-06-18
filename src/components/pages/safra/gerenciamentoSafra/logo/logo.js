import React from "react"
import { View, Image } from "react-native"
import styles from "./style"

export default function Logo(){
    return(
        <View>
            <Image style={styles.logo}
            source={require('../../../../../img/logoSafra.png')}
            />
        </View>
    )
}

  