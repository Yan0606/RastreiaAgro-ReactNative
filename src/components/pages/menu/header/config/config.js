import React from "react"
import { View, Image, TouchableOpacity} from "react-native"
import styles from "./style"
import { useNavigation } from "@react-navigation/native";


export default function Config() {
    const navigation = useNavigation();
    const menuConfiguracao = () => {
        navigation.navigate('MenuConfiguracao');
    }
    return (
        <View>
            <TouchableOpacity onPress={() => { menuConfiguracao() }}>
                <Image style={styles.logo}
                    source={require('../../../../../img/config.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

