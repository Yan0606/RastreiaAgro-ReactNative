import React from 'react';
import styles from "./style"
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import BtnProximo from './btn/btn';

export default Main = () => {
    return (
        <View style={styles.container}>
            <BtnProximo />
        </View>
    );
}
