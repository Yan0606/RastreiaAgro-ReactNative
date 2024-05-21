import React from 'react';
import styles from "./style"
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Input2 from './input2/input2';
import Input3 from './input3/input3';
import Input4 from './input4/input4';
import Input5 from './input5/input5';
import Input6 from './input6/input6';
import Input7 from './input7/input7';

import BtnProximo from './btnProximo/btnProximo';

export default Main = () => {
    return (
        <View style={styles.container}>
            
            <Input2 />
            <Input3 />
            <Input4 />
            <Input5 />
            <Input6 />
            <Input7 />
            <BtnProximo />
        </View>
    );
}
