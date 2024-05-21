import React from 'react';
import styles from "./style"
import { View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Input1 from './input1/input1';
import Input2 from './input2/input2';
import Input3 from './input3/input3';
import Input4 from './input4/input4';
import BtnProximo from './btnProximo/btnProximo';




export default Main = () => {
    return (
        <View style={styles.container}>
            <Input1 />
            <Input2 />
            <Input3 />
            <Input4 />
            <BtnProximo />
        </View>
    );
}
