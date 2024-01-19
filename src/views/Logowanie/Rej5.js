import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRegistration } from './RegistrationContext';

const generateRandomCode = (length) => {
  const characters = '0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const Rej5 = ({ route }) => {
  const { updateUserData } = useRegistration();
  const navigation = useNavigation();
  const [verificationCode, setVerificationCode] = useState('');

  useEffect(() => {
    setVerificationCode(generateRandomCode(12));
  }, []);

  const buttonDalej = () => {
    updateUserData({ verificationCode });
    navigation.navigate('Rej6', {
    });
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
          source={require('../../../assets/zielonybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.div1}>
        <Text style={styles.text1}>Rejestracja - krok 4</Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.text}>
          Stworzyliśmy dla Ciebie twój unikalny Login
        </Text>
      </View>
      <View style={styles.div2}>
        <Text style={styles.text2}>{verificationCode}</Text>
      </View>
      <View style={styles.div3}>
        <Text style={styles.text3}>Zapamiętaj go!</Text>
      </View>
      <TouchableOpacity onPress={buttonDalej} style={styles.div4}>
        <Text style={styles.text4}>Dalej</Text>
      </TouchableOpacity>
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
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: '81.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    //fontFamily: 'Arial',
    fontSize: 20,
    textAlign: 'center'
  },
  div1: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '5%',
    top: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    //fontFamily: 'Arial',
    fontSize: 20
  },
  div2: {
    position: 'absolute',
    left: '5%',
    top: '45%',
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    //fontFamily: 'Arial',
    fontSize: 30,
    color: 'white'
  },
  div3: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '5%',
    top: '55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    //fontFamily: 'Arial',
    fontSize: 20,
    textAlign: 'center'
  },
  div4: {
    position: 'absolute',
    left: '5%',
    top: '85%',
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text4: {
    //fontFamily: 'Arial',
    fontSize: 30,
    color: 'white'
  },
  imageContainer2: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '10%',
    top: '85%'
  }
});

export default Rej5;