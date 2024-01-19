import React from 'react';
import {ScrollView, View, Text, StyleSheet } from 'react-native';

function PlatnoscItem({ platnosc }) {
  return (
    <ScrollView style={styles.platnoscItem}>
      <Text>Kwota: {platnosc.kwota}</Text>
      <Text>Konto: {platnosc.konto}</Text>
      <Text>Nazwa: {platnosc.nazwa}</Text>
      <Text>Data: {platnosc.date}</Text>
    </ScrollView>
  );
}

function PlatnosciList({ platnosci }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Historia Płatności</Text>
      {platnosci.map((platnosc, index) => (
        <PlatnoscItem key={index} platnosc={platnosc} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  platnoscItem: {
    marginBottom: 16,
  },
});

export default PlatnosciList;
