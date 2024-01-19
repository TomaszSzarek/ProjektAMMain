import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateInputField = ({ selectedDate, onDateChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString('pl-PL');
    onDateChange(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Wybierz datę"
        value={selectedDate}
        editable={false}
      />
      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Image source={require('../../img/Kalendarz.png')} style={styles.image} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    marginRight: 10,
    width: 28,
    height: 31,
  },
});

export default DateInputField;
