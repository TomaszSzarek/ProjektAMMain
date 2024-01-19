import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Log2 = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [kod, setKod] = useState(null); 
  const [kodGenerated, setKodGenerated] = useState(false);

  useEffect(() => {
    if (!kodGenerated) {
      const generatedKod = Math.floor(1000 + Math.random() * 9000);
      setKod(generatedKod);
      setKodGenerated(true);
      console.log('kod: ' + generatedKod); 
    }
  }, [kodGenerated]);

  const skanujTwarz = () => {
    navigation.navigate('Log3');
  };

  const buttonDalej = (text) => {
    setInputValue(text);
    if (text.length === 4 && parseInt(text) === kod) {
      setInputValue('');
      navigation.navigate('TabNav');
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
          placeholder="*|*|*|*|*"
          style={styles.input}
          onChangeText={buttonDalej}
          value={inputValue}
        />
      </View>
      <View style={styles.div2}>
        <Text style={styles.text2}>Logowanie - krok 2</Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.text}>Wprowadź kod SMS</Text>
      </View>
      <TouchableOpacity
            style={styles.textbutton}
            onPress={skanujTwarz}
          >
            <Text style={styles.textSkan}>Skanuj Twarz</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: '#38BF2D',
  },
  header: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '85%',
    top: '10%',
  },
  headerText: {
    width: '100%',
    height: '50%',
  },
  imageContainer: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  div: {
    position: 'absolute',
    left: '5%',
    top: '40%',
    width: '90%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  div2: {
    position: 'absolute',
    left: '5%',
    top: '55%',
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: 20,
  },
  input: {
    textAlign: 'center',
    padding: 15,
    borderRadius: 25,
    fontSize: 26,
    color: '#c0c0c0',
  },
  textbutton: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 40,
    width: '80%',
    height: '10%',
    margin: '10%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  textSkan: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default Log2;
