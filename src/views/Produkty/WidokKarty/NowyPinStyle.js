import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.😎",
    zIndex: 10,
  },
  modalContainer: {
    height: 300,
    width: 316,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 0.4,
    borderRadius: 10,
    opacity: 1,
    position:'relative',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "70%",
    textAlign: "center",
    padding: 15,
    borderRadius: 22,
    borderStyle: "solid",
    borderWidth: 0.4,
    fontSize: 24,
    backgroundColor: "#e4e6eb",
    color: "gray",
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 34,
    borderRadius:8
  },
  confirmButton: {
    marginTop: 20,
    width: 200}
});

