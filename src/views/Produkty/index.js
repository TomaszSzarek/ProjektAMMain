import React from 'react';
import { Image, Pressable, Text, View } from "react-native";
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';  

export function Produkty({navigation}) {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
      </View>
      <Pressable style={styles.textbutton} onPress={() => navigation.navigate('WidokKarty')}>
        <Text style={styles.text}>Widok Karty</Text>
      </Pressable>
      <Pressable style={styles.textbutton} onPress={() => navigation.navigate('Pozyczki')}>
        <Text style={styles.text}>Pożyczki</Text>
      </Pressable>
    </View>
  );
}
