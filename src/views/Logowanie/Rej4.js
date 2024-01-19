import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRegistration } from './RegistrationContext';

const Rej4 = () => {
  const navigation = useNavigation();
  const { updateUserData } = useRegistration();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const buttonDalej = () => {
    if (password === confirmPassword) {
      updateUserData({ password });
      navigation.navigate('Rej4_5', {
      });
    } else {
      alert('Hasła nie są takie same. Spróbuj ponownie.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/NeoBank.png')}
          style={styles.headerText}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/bialybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <TextInput
          placeholder="Ustal nowe hasło"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.imageContainer2}>
        <Image
          source={require('../../../assets/bialybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer2}>
        <TextInput
          placeholder="Powtórz hasło"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <View style={styles.imageContainer5}>
        <Image
          source={require('../../../assets/zielonybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.div}>
        <Text style={styles.text}>Rejestracja - krok 3</Text>
      </View>
      <TouchableOpacity onPress={buttonDalej} style={styles.div2}>
        <Text style={styles.text2}>Dalej</Text>
      </TouchableOpacity>
      <View style={styles.panel}>
        <Text style={styles.rejText}>Ustal nowe hasło</Text>
      </View>
      <View style={styles.panel2}>
        <Text style={styles.rejText}>Powtórz hasło</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38BF2D'
  },
  header: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '85%',
    top: '10%'
  },
  headerText: {
    width: '100%',
    height: '50%'
  },
  imageContainer: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '10%',
    top: '38%'
  },
  imageContainer2: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '10%',
    top: '53%'
  },
  imageContainer5: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '10%',
    top: '85%'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  div: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '5%',
    top: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  },
  div2: {
    position: 'absolute',
    left: '5%',
    top: '85%',
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: 30,
    color: 'white'
  },
  panel: {
    position: 'absolute',
    left: '5%',
    top: '33%',
    height: '5%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
   panel2: {
    position: 'absolute',
    left: '5%',
    top: '48%',
    height: '5%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejText: {
    fontSize: 20
  },
  input: {
    textAlign: 'center',
    padding: 15,
    borderRadius: 25,
    fontSize: 26,
    color: '#c0c0c0'
  }
});

export default Rej4;