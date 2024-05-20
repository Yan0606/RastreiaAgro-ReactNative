import React from "react";
import styles from "./style"
import { View } from "react-native";
import Input1 from "./input1/input1";
import Input2 from "./input2/input2";
import Btn from "./btnEntrar/btn";
import Label from "./label/label";

export default function Main(){
    return(
     
        <View style={styles.main}>
            <Input1/>
            <Input2/>
            <Btn/>
            <Label/>
        </View>
     
    );
}