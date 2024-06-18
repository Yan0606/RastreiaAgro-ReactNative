import React from 'react';
import styles from "./style"
import { View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from './btnVoltar/btnVoltar';
import Logo from './logo/logo';
import Title from './title/title';
import DataInicio from './dataInicio/data';
import DataFim from './dataFim/data';
import Label from './label/label';
import BtnNovo from './btnNovo/btnNovo';
import InputTalhao from './talhao1/inputTalhao';
import InputTalhao2 from './talhao2/inputTalhao2';

export default EditarSafra = () => {
    return (
        <View style={styles.container}>
            <BtnVoltar />
            <View style={styles.conteudo}>
                <Logo />
                <Title />
                <View style={styles.data}>
                    <DataInicio />
                    <DataFim />
                </View>
                <View style={styles.novoTalhao}>
                    <Label />
                    <BtnNovo />
                </View>
                <View style={styles.talhoes}>
                    <InputTalhao />
                    <InputTalhao2 />
                </View>
            </View>
        </View>
    );
}
