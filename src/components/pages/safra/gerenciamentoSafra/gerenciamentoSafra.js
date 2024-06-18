import React from 'react';
import styles from "./style"
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from './btnVoltar/btnVoltar';
import Logo from './logo/logo';
import Title from './title/title';
import Label from './label/label';
import Input from './input/input';
import BtnProximo from './btn1/btnProximo';
import Label2 from './label2/label';
import Btn2 from './btn2/btnProximo';
import Agricultor from './personagem/index';
import BalaoConversa from './balaoConversa/index';

export default gerencimentoSafra = () => {
    return (
        <View style={styles.background}>
            <BtnVoltar />
            <Logo />
            <Title />
            <Label />
            <Input />
            <BtnProximo />
            <Label2 />
            <Btn2 />
            <BalaoConversa />
            <Agricultor />
        </View>
    );
}
