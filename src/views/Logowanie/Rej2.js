import React, { useContext,useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRegistration } from './RegistrationContext';

const Rej2 = () => {
  const navigation = useNavigation();
  const { updateUserData } = useRegistration();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const buttonDalej = () => {
    updateUserData({ firstName });
    updateUserData({ lastName });
    updateUserData({ phoneNumber });
    updateUserData({ email });
    navigation.navigate('Rej3', {
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
          source={require('../../../assets/bialybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <TextInput
          placeholder="Podaj pierwsze imię"
          style={styles.input}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
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
          placeholder="Podaj nazwisko"
          style={styles.input}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View style={styles.imageContainer3}>
        <Image
          source={require('../../../assets/bialybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer3}>
        <TextInput
          placeholder="Podaj numer telefonu"
          style={styles.input}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <View style={styles.imageContainer4}>
        <Image
          source={require('../../../assets/bialybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer4}>
        <TextInput
          placeholder="Podaj adres e-mail"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.imageContainer5}>
        <Image
          source={require('../../../assets/zielonybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.div}>
        <Text style={styles.text}>Rejestracja - krok 1</Text>
      </View>
      <TouchableOpacity onPress={buttonDalej} style={styles.div2}>
        <Text style={styles.text2}>Dalej</Text>
      </TouchableOpacity>
      <View style={styles.panel1}>
        <Text style={styles.rejText}>Pierwsze imię</Text>
      </View>
      <View style={styles.panel2}>
        <Text style={styles.rejText}>Nazwisko</Text>
      </View>
      <View style={styles.panel3}>
        <Text style={styles.rejText}>Numer telefonu</Text>
      </View>
      <View style={styles.panel4}>
        <Text style={styles.rejText}>Adres e-mail</Text>
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
    top: '23%'
  },
  imageContainer2: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '10%',
    top: '38%'
  },
  imageContainer3: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '10%',
    top: '53%'
  },
  imageContainer4: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '10%',
    top: '68%'
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
  panel1: {
    position: 'absolute',
    left: '5%',
    top: '18%',
    height: '5%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel2: {
    position: 'absolute',
    left: '5%',
    top: '33%',
    height: '5%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
   panel3: {
    position: 'absolute',
    left: '5%',
    top: '48%',
    height: '5%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
   panel4: {
    position: 'absolute',
    left: '5%',
    top: '63%',
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

export default Rej2;