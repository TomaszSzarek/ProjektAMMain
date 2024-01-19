import React from 'react';
import { StyleSheet, Image } from 'react-native';

export const BottomTabIcon = ({ routeName }) => {
  switch (routeName) {
    case 'Pulpit':
      return (
        <Image
          style={styles.img}
          source={require('./../img/bottomNav/Pulpit.png')}
        />
      );
    case 'Platnosci':
      return (
        <Image
          style={styles.img}
          source={require('./../img/bottomNav/Platnosci.png')}
        />
      );
    case 'Produkty':
      return (
        <Image
          style={styles.img}
          source={require('./../img/bottomNav/Produkty.png')}
        />
      );
    case 'ZnajdzOddzial':
      return (
        <Image
          style={styles.img}
          source={require('./../img/bottomNav/ZnajdzOddzial.png')}
        />
      );
    case 'Historia':
      return (
        <Image
          style={styles.img}
          source={require('./../img/bottomNav/Historia.png')}
        />
      );
    case 'Profil':
      return (
        <Image
          style={styles.img}
          source={require('./../img/bottomNav/Profil.png')}
        />
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  img: {
    width: 28,
    height: 28,
  },
});