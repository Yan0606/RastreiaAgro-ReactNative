import React from 'react';
import styles from "./style"
import { View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import BtnVoltar from './btnVoltar/btnVoltar';
import Logo from './logo/logo';
import Title from './title/title';
import Main from './main/main';

export default Cadastro = () => {
    return (
        <View style={styles.container}>
            <BtnVoltar />
            <View style={styles.conteudo}>
                <Logo />
                <Title />
                <Main />
            </View>
        </View>
    );
}
