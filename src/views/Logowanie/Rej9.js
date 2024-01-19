import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRegistration } from './RegistrationContext';

const Rej9 = ({ route }) => {
  const { updateUserData } = useRegistration();
  const navigation = useNavigation();
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');

  const buttonDalej = () => {
    updateUserData({ country });
    updateUserData({ street });
    updateUserData({ postalCode });
    updateUserData({ city });
    navigation.navigate('Rej10', {
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
          placeholder="POLSKA"
          style={styles.input}
          onChangeText={setCountry}
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
          placeholder="Podaj ulicę, nr domu i lokalu"
          style={styles.input2}
          onChangeText={setStreet}
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
          placeholder="Podaj kod pocztowy"
          style={styles.input}
          onChangeText={setPostalCode}
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
          placeholder="Podaj miejscowość"
          style={styles.input}
          onChangeText={setCity}
        />
      </View>
      <View style={styles.imageContainer5}>
        <Image
          source={require('../../../assets/zielonybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.div}>
        <Text style={styles.text}>Rejestracja - krok 7</Text>
      </View>
      <TouchableOpacity onPress={buttonDalej} style={styles.div2}>
        <Text style={styles.text2}>Dalej</Text>
      </TouchableOpacity>
      <View style={styles.panel1}>
        <Text style={styles.rejText}>Kraj</Text>
      </View>
      <View style={styles.panel2}>
        <Text style={styles.rejText}>Ulica, nr domu i lokalu</Text>
      </View>
      <View style={styles.panel3}>
        <Text style={styles.rejText}>Kod pocztowy</Text>
      </View>
      <View style={styles.panel4}>
        <Text style={styles.rejText}>Miejscowość</Text>
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
    //fontFamily: 'Arial',
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
    //fontFamily: 'Arial',
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
    //fontFamily: 'Arial',
    fontSize: 20
  },
  input: {
    textAlign: 'center',
    padding: 15,
    borderRadius: 25,
    //fontFamily: 'Arial',
    fontSize: 26,
    color: '#c0c0c0'
  },
  input2: {
    textAlign: 'center',
    padding: 21,
    borderRadius: 25,
    //fontFamily: 'Arial',
    fontSize: 20,
    color: '#c0c0c0'
  }
});

export default Rej9;