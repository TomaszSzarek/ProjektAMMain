import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Rej7 = () => {
  const navigation = useNavigation();
  const buttonDalej = () => {
    navigation.navigate('Rej9');
  };
  const buttonSelfie = () => {
    navigation.navigate('Rej8');
  };
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
          <Image
            source = {require('../../../assets/NeoBank.png')}
            style = {styles.headerText}
          />
      </View>
      <View style = {styles.imageContainer}>
          <Image
            source = {require('../../../assets/zielonybutton.png')}
            style = {styles.image}
          />
      </View>
      <View style = {styles.imageContainer2}>
          <Image
            source = {require('../../../assets/zielonybutton.png')}
            style = {styles.image}
          />
      </View>
      <View style = {styles.panel}>
        <Text style = {styles.rejText}>Czy chcesz dodać swoje zdjęcie</Text>
      </View>
      <View style = {styles.panel2}>
        <Text style = {styles.rejText}>lub</Text>
      </View>
      <TouchableOpacity onPress = {buttonDalej} style = {styles.div2}>
        <Text style = {styles.text2}>Pomiń</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {buttonSelfie} style = {styles.div3}>
        <Text style = {styles.text2}>Zeskanuj twarz</Text>
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

export default Rej7;