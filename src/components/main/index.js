import React from "react";
import { View } from "react-native";
import Subtitle from "./subtitle";
import Button from "./button";
import LabelCadastro from "./labelCadastro";
import ButtonCadastrar from "./buttonCadastrar";
import BalaoConversa from "./balaoConversa";
import Personagem from "./personagem";

export default  function Main(){
    return(
     <View>
        <Subtitle/>
        <Button/>
        <LabelCadastro/>
        <ButtonCadastrar/>
        <BalaoConversa/>
        <Personagem/>
        
     </View>
    );
}