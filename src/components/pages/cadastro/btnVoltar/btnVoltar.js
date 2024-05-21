import React from "react"
import { View, Image } from "react-native"
import styles from "./style"

export default function BtnVoltar(){
    return(
        <View>
            <Image style={styles.btnVoltar}
            source={require('../../../../img/btnVoltar.png')}
            />
        </View>
    )
}

  