import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#d6d3d1",
    borderRadius: 10,
    width: 45,
    aspectRatio: 1 / 1,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
  },
  activeInput: {
    borderWidth: 3,
    borderColor: "#f87171",
  },
});
