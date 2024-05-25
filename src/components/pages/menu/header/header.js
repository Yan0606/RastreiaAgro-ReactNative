import React from "react";
import styles from "./style"
import { View } from "react-native";
import Config from "./config/config";


export default function Header() {
    return (

        <View style={styles.header}>
            <Config />
        </View>

    );
}