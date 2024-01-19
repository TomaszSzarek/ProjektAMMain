import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Log1 = () => {
  const navigation = useNavigation();
  const logowanie = require('./Logowanie.js');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');

  const buttonDalej = async () => {
    if (!verificationCode || !password) {
      alert("Wprowadź numer klienta i hasło.");
      return; 
    }
    const logowanieSuccess = await logowanie(verificationCode, password);
    if (logowanieSuccess) {
      navigation.navigate('Log2');
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
          placeholder="*|*|*|*|*|*|*|*|*|*|*|*"
          style={styles.input}
          value={verificationCode}
          onChangeText={(text) => setVerificationCode(text)}
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
          placeholder="*|*|*|*|*|*|*|*|*|*|*|"
          style={[styles.input, { color: 'gray' }]}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={buttonDalej} style={styles.imageContainer5}>
        <Image
          source={require('../../../assets/zielonybutton.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.div}>
        <Text style={styles.text}>Logowanie - krok 1</Text>
      </View>
      <TouchableOpacity onPress={buttonDalej} style={styles.div2}>
        <Text style={styles.text2}>Dalej</Text>
      </TouchableOpacity>
      <View style={styles.panel}>
        <Text style={styles.rejText}>Wprowadź numer klienta</Text>
      </View>
      <View style={styles.panel2}>
        <Text style={styles.rejText}>Wprowadź hasło</Text>
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
    top: '53%',
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
    color: 'gray',  
  }
});

export default Log1;
