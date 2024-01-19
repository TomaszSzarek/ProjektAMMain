import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function OddzialyItem({ oddzialy }) {
  return (
    <View style={styles.OddzialyItem}>
      <Text>Miasto: {oddzialy.miasto}</Text>
      <Text>Nazwa: {oddzialy.nazwa}</Text>
    </View>
  );
}

function OddzialList({ oddzialy }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Odzialy</Text>
      {oddzialy.map((oddzialy, index) => (
        <View style={styles.platnoscItem} key={index}>
          <OddzialyItem oddzialy={oddzialy} />
        </View>
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
  }
});

export default OddzialList;
