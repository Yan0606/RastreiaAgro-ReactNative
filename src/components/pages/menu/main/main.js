import React from "react";
import { View, } from "react-native";
import styles from "./style";
import Square1 from "./square1/square1";
import Square2 from "./square2/square2";   
import Square3 from "./square3/square3";   
import Square4 from "./square4/square4";   
import Square5 from "./square5/square5";   
import Square6 from "./square6/square6";   


export default function Main() {
    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Square1 style={styles.square}/>
                <Square2 style={styles.square}/>
                <Square3 style={styles.square}/>
                <Square4 style={styles.square}/>
                <Square5 style={styles.square}/>
                <Square6 style={styles.square}/>
            </View>
        </View>
    )
}

