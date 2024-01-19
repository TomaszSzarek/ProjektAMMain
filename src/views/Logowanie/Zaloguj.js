import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const Logowanie = () => {
  const navigation = useNavigation();
  const buttonZaloguj = () => {
    navigation.navigate('Log1');
  };
  const buttonRejestruj = () => {
    navigation.navigate('RejestracjaNav');
  };
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Image
          source = {require('../../../assets/NeoBank.png')}
          style = {styles.headerText}
        />
      </View>
      <Svg height = "100%" width = "100%">
        <Circle cx = "50%" cy = "50%" r = "30%" fill = "#2E7527" opacity = "0.26"/>
        <Circle cx = "50%" cy = "50%" r = "20%" fill = "#2E7527"/>
      </Svg>
      <TouchableOpacity onPress = {buttonZaloguj} style = {styles.imageContainer}>
          <Image
            source = {require('../../../assets/lock.png')}
            style = {styles.image}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress = {buttonZaloguj} style={styles.buttonZaloguj}>
        <Text style={styles.buttonText}>Zaloguj</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {buttonRejestruj} style={styles.buttonRejestruj}>
        <Text style={styles.buttonText2}>Nie masz konta?</Text>
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
  wylacz: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    top: '10%'
  },
  wylaczText: {
    width: '100%',
    height: '50%'
  },
  kontakt: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '85%',
    top: '10%'
  },
  kontaktText: {
    width: '100%',
    height: '50%'
  },
  imageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: '36%',
    left: '40%',
    width: '20%',
    height: '20%',
  },
  image: {
    width: '120%',
    height: '100%'
  },
  buttonZaloguj: {
    position: 'absolute',
    top: '55%',
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    //fontFamily: 'Arial',
    fontSize: 30,
    color: 'white'
  },
  buttonRejestruj: {
    position: 'absolute',
    top: '67%',
    left: '30%',
    width: '40%',
    alignItems: 'center',
  },
  buttonText2: {
    //fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Logowanie;