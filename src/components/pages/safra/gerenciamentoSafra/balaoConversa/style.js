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
    marginTop: 35,
    marginRight: 65,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#009846',
    textAlign: 'center',

  },
  // seta: {
  //   width: 0,
  //   height: 0,
  //   borderTopWidth: 10,
  //   borderTopColor: '#fff',
  //   borderRightWidth: 10,
  //   borderRightColor: 'transparent',
  //   borderLeftWidth: 10,
  //   borderLeftColor: 'transparent',
  //   position: 'relative',
  //   right: "-20%",
  //   // top: -10,
  // },
});

export default styles;