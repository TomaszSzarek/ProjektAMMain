import { Button, View, Text, StyleSheet, ScrollView, TextInput, Appearance } from "react-native";
import { styles } from "./style.js";
import { useEffect, useState } from "react";
GLOBAL = require("../../../globals");

const ModalComponent = (props) => {
  const [modalInputValue, setModalInputValue] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.closeButton}>
        <Button title="X" style={styles.closeButton}
        onPress={() => props.onCloseModal()}></Button></View>
        <TextInput
          placeholder="Enter new value"
          style={styles.input}
          maxLength={6}
          onChangeText={(value) => setModalInputValue(value)}
          value={modalInputValue}
          keyboardType="numeric"
        />
        <View style={styles.confirmButton}>
        <Button title="Confirm" style={styles.confirmButton} onPress={() => props.onChangeConfirm(modalInputValue)}></Button>
        </View>
        </View>
    </View>
  );
};

export default ModalComponent;