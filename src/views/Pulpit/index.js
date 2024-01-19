//import React from 'react';
import {Text, View, Image} from "react-native";
import { styles } from './style';
import { GetAuthenticatedUser } from '../../User'
import { useEffect, useState } from "react";
//import LinearGradient from 'react-native-linear-gradient';

export function Pulpit({ navigation }) {
  const [dostepneSrodki, setDostepneSrodki] = useState('');

  const getDostepneSrodki = async () => {
    let authenticatedUser = await GetAuthenticatedUser();
    setDostepneSrodki(authenticatedUser.dostepneSrodki);
  }

  useEffect(() => {
    getDostepneSrodki();
  }, []);

    return (
        <View style={styles.container}>
          <View style={styles.header}>
          <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle1}>KontoBardziejNeo</Text>
            <Text style={styles.textStyle2}>Dostępne środki</Text>
            <Text style={styles.textStyle3}>{dostepneSrodki}</Text>
          </View>
          <View style={styles.bottom}>
            <Image source={require('../../img/Reklama.png')} style={styles.image} />
          </View>
        </View>
      );
}
