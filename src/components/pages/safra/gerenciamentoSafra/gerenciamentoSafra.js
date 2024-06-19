import React from 'react';
import styles from "./style"
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from './btnVoltar/btnVoltar';
import Logo from './logo/logo';
import Title from './title/title';
import Input from './input/input';
import BtnProximo from './btn1/btnProximo';
import Label2 from './label2/label';
import Btn2 from './btn2/btnProximo';
import Agricultor from './personagem/index';
import BalaoConversa from './balaoConversa/index';

export default gerenciamentoSafra = () => {
    return (

        <View style={styles.container}>
            <BtnVoltar />
            <View style={styles.conteudo}>
                <Logo />
                <Title />
                <Input />
                <BtnProximo />
                <Label2 />
                <Btn2 />
                <BalaoConversa />
                <Agricultor />
            </View>
        </View>
    );
}
