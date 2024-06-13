import React from 'react';
import { TextInput, View } from 'react-native';
import styles from "./style";


export default function Input() {
    return (
        <TextInput
            style={styles.input}
            placeholder="Nome:"
        />
    );
};

