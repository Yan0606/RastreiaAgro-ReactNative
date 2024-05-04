import React from "react";
import { View, Image } from "react-native";
import styles from "./style"


export default function agricultor(){
    return(
        <View>
            <Image style={styles.personagem}
            source={require('../../../img/vetor_agricultor.png')}
            />
        </View>
    )
}

  