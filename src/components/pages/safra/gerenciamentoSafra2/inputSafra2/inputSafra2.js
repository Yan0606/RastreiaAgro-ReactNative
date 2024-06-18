import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import styles from "./style";


export default function InputSafra2() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Safra1</Text>
                <Text style={styles.dataText}>06/04/2024</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.editar}>
                    <Image style={styles.imgEditar}
                        source={require('../../../../../img/btn_edit.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.excluir}>
                    <Image style={styles.imgExcluir}
                        source={require('../../../../../img/btn_excluir.png')} />
                </TouchableOpacity>
            </View>
        </View>

    );
};

