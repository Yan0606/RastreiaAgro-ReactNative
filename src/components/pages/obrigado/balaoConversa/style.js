import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  balao: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 3, // sombra (pode variar dependendo do dispositivo)
    width: 238,
    height: 179,
    justifyContent: 'center',
    position: "absolute",
    overflow: "hidden",
    top: 195,
    right:-80,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#009846',
    textAlign: 'center',

  },
  
});

export default styles;