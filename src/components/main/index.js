import React from "react";
import styles from "./style"
import { View } from "react-native";
import Logo from "../logo";
import Subtitle from "./subtitle";
import Button from "./button";
import LabelCadastro from "./labelCadastro";
import ButtonCadastrar from "./buttonCadastrar";
import BalaoConversa from "./balaoConversa";
import Personagem from "./personagem";


export default  function Main({ navigation }){
    return(
     
        <View style={styles.main}>
            <Logo/> 
            <Subtitle/>
            <Button/>
            <LabelCadastro/>
            <ButtonCadastrar/>
            <BalaoConversa/>
            <Personagem/>
        </View>
     
    );
}