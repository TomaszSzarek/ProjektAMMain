import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRegistration } from './RegistrationContext';

const Rej6 = ({ route }) => {
  const { updateUserData } = useRegistration();
  const navigation = useNavigation();
  const [accountType, setAccountType] = useState('');

  const buttonDalej = () => {
    updateUserData({ accountType });
    navigation.navigate('Rej7', {
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
      <View style={styles.imageContainer2}>
        <Image
          source={require('../../../assets/zielonybutton.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.div}>
        <Text style={styles.text}>Rejestracja - krok 5</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.rejText}>Wybierz rodzaj konta</Text>
      </View>
      <View style={styles.panel2}>
        <Text style={styles.rejText}>lub</Text>
      </View>
      <TouchableOpacity onPress={() => { setAccountType('Osobiste'); buttonDalej(); }} style={styles.div2}>
        <Text style={styles.text2}>Osobiste</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setAccountType('Oszczędnościowe'); buttonDalej(); }} style={styles.div3}>
        <Text style={styles.text2}>Oszczędnościowe</Text>
      </TouchableOpacity>
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
    top: '38%',
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div3: {
    position: 'absolute',
    left: '5%',
    top: '53%',
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
    //fontFamily: 'Arial',
    fontSize: 20
  }
});

export default Rej6;