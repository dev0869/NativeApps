import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  smpara: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    color: "rgb(61, 52, 52)",
  },
});

export const Loginstyle = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  textpad: {
    position: "relative",
    top: -99,
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 44,
    fontWeight: "bold",
    color: "white",
  },
  inputContainer: {
    marginBottom: 5,
  },
  label: {
    marginTop: 21,
    fontSize: 18,
    color: "#4857E9",
  },
  input: {
    width: "100%",
    marginTop: 4,
    height: 55,
    borderColor: "#4857E4",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 24,
    paddingLeft: 20,
    backgroundColor: "transparent",
    color: "#4857E4",
  },
  button: {
    width: "100%",
    position: "relative",
    top: 24,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btnText: {
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: 15,
    padding: 12,
    backgroundColor: "#4857E4",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const Verifystyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  imgcontainer: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginTop: 40,
    display: "flex",
    gap: 3,
    justifyContent: "center",
    flexDirection: "row",
  },
  inputs: {
    width: 40,
    height: 40,
    fontSize: 20,
    padding:6,
    borderRadius: 9,
    textAlign: "center",
    backgroundColor: "#E6DFFA",
  
  },
});
