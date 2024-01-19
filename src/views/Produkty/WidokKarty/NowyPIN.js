import { Button, View, Text, StyleSheet, ScrollView, TextInput, Appearance } from "react-native";
import { styles } from "./NowyPinStyle.js";
import { useEffect, useState } from "react";
GLOBAL = require("../../../globals");

const NowyPin = (props) => {
  const [pin, setPin] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.closeButton}>
        <Button title="X" style={styles.closeButton}
        onPress={() => props.onCloseModal()}></Button></View>
        <TextInput
          placeholder="Enter new PIN"
          style={styles.input}
          maxLength={6}
          onChangeText={(value) => setPin(value)}
          value={pin}
          keyboardType="numeric"
        />
        <View style={styles.confirmButton}>
        <Button title="Confirm" style={styles.confirmButton} onPress={() => props.onPinConfirm(pin)}></Button>
        </View>
        </View>
    </View>
  );
};

export default NowyPin;