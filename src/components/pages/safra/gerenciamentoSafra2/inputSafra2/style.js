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
    borderRadius:10,
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
    fontSize: 15,
},
imgEditar: {
    width: 38,
    height: 38,
    marginBottom: 5, // Espaço entre os botões
    marginRight:10,
},
imgExcluir: {
    width: 38,
    height: 38,
},
});

export default styles;
