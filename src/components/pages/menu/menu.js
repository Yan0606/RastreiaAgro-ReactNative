import React from 'react';
import styles from "./style"
import { View, ImageBackground, Text, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from './header/header';
import Title from './title/title';
import Main from './main/main';

const backgroundImage = require('../../../img/bg.png');

export default Menu = () => {
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
            <View style={styles.header}>
                <Header />
            </View>
            <View>
                <Title />
            </View> 
            <View>
                <Main />
            </View>
        </ImageBackground>
    );
}
