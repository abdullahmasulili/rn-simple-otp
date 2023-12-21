import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#a8a29e",
    borderRadius: 5,
    width: 300,
    height: 40,
    padding: 8,
  },
});
