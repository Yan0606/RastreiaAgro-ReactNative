import React from 'react';
import styles from "./style"
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from './btnVoltar/btnVoltar';
import Logo from './logo/logo';
import Title from './title/title';
import InputSafra from './inputSafra/inputSafra';
import InputSafra2 from './inputSafra2/inputSafra2';
import Agricultor from './personagem/index';
import BalaoConversa from './balaoConversa';

export default gerencimentoSafra2 = () => {
    return (
        <View style={styles.background}>
            <BtnVoltar />
            <Logo />
            <Title /> 
            <InputSafra />
            <InputSafra2 />
            <BalaoConversa/>
            <Agricultor />
        </View>
    );
}
