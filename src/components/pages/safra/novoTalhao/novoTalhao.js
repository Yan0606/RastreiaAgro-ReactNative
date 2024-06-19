import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BtnVoltar from '../editarSafra/btnVoltar/btnVoltar';
import Logo from '../editarSafra/logo/logo';
import Title from '../editarSafra/title/title';
import DataInicio from '../editarSafra/dataInicio/data';
import DataFim from '../editarSafra/dataFim/data';
import Label from '../editarSafra/label/label';
import BtnNovo from '../editarSafra/btnNovo/btnNovo';
import InputTalhao from '../editarSafra/talhao1/inputTalhao';
import InputTalhao2 from '../editarSafra/talhao2/inputTalhao2';

const FormScreen = ({ onClose }) => {
    const [selectedTalhao, setSelectedTalhao] = useState('');
    const [selectedCultura, setSelectedCultura] = useState('');
    const [selectedIrrigacao, setSelectedIrrigacao] = useState('');
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();
    const editarSafra = () => {
        navigation.navigate('EditarSafra');
    }

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => { /* Evitar interação com o fundo */ }}>
                    <View style={styles.unclickableBackground} />
                </TouchableWithoutFeedback>

                <View style={styles.formContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => { editarSafra() }}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>

                    <Text style={styles.label}>Talhões</Text>
                    <View style={styles.dropdownContainer}>
                        <Picker
                            selectedValue={selectedTalhao}
                            onValueChange={(itemValue) => setSelectedTalhao(itemValue)}
                            style={styles.dropdown}
                        >
                            <Picker.Item label="Selecione o talhão" value="" />
                            <Picker.Item label="Talhão 1" value="talhao1" />
                            <Picker.Item label="Talhão 2" value="talhao2" />
                        </Picker>
                    </View>

                    <Text style={styles.label}>Culturas</Text>
                    <View style={styles.dropdownContainer}>
                        <Picker
                            selectedValue={selectedCultura}
                            onValueChange={(itemValue) => setSelectedCultura(itemValue)}
                            style={styles.dropdown}
                        >
                            <Picker.Item label="Selecione a cultura" value="" />
                            <Picker.Item label="Tomate" value="tomate" />
                            <Picker.Item label="Batata" value="batata" />
                            <Picker.Item label="Batata-doce" value="batata-doce" />
                            <Picker.Item label="Milho" value="milho" />
                        </Picker>
                    </View>

                    <Text style={styles.label}>Tipo de irrigação</Text>
                    <View style={styles.dropdownContainer}>
                        <Picker
                            selectedValue={selectedIrrigacao}
                            onValueChange={(itemValue) => setSelectedIrrigacao(itemValue)}
                            style={styles.dropdown}
                        >
                            <Picker.Item label="Selecione o tipo de irrigação" value="" />
                            <Picker.Item label="Aspersão" value="irrigacao1" />
                            <Picker.Item label="Gotejamento" value="irrigacao2" />
                            <Picker.Item label="Superfície" value="irrigacao2" />
                            <Picker.Item label="Pivô Central" value="irrigacao2" />
                            <Picker.Item label="Subterrânea" value="irrigacao2" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={() => { /* Cadastrar */ }}>
                        <Text style={styles.submitButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    unclickableBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    formContainer: {
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    closeButtonText: {
        fontSize: 24,
        color: 'red',
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontSize: 16,
    },
    dropdownContainer: {
        width: '100%',
        padding:2,
        marginBottom: 20,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    dropdown: {
        width: '100%',
        height: 50,
    },
    submitButton: {
        backgroundColor: '#009846',
        padding: 15,
        borderRadius: 40,
        width: '40%',
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },


    // ESTILIZAÇÃO DO PLANO DE FUNDO
    container: {
        flex: 1,
        backgroundColor: '#18603A',
        
      },
      conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      data: {
        alignItems:"center",
        justifyContent:'space-between',
        flexDirection: 'row',
      },
      novoTalhao: {
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection: 'row',
      },
      talhoes:{
        margin:10,
      },
});

export default FormScreen;
