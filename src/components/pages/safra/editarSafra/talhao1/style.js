import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 375,
        height: 78,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom:10,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text1: {
        color: '#000000',
        fontSize: 15,
    },
    dataText: {
        color: '#188A24',
        fontSize: 20,
        fontWeight: 'bold'
    },
    imgEditar: {
        width: 38,
        height: 38,
    },
    imgExcluir: {
        width: 38,
        height: 38,
    },
    editar: {
        margin: 5,
    },
    excluir: {
        margin: 5,
    },

});

export default styles;
