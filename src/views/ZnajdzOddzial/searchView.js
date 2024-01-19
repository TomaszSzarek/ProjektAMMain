import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location';

const SearchView = ({ searchText, setSearchText, onSearch, onLocationSearch }) => {
  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleLocalizationSearch = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Brak uprawnień do lokalizacji');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      console.log(`Szerokość: ${latitude}, Długość: ${longitude}`);
      if (onLocationSearch) {
        onLocationSearch(latitude, longitude);
      }
    } catch (error) {
      console.error('Błąd pobierania lokalizacji:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Wpisz tekst..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity style={styles.voiceSearchButton} onPress={handleLocalizationSearch}>
        <FontAwesome name="map-marker" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    margin: '3%',
    width: '80%',
    height: '20%',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'lightgray',
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
  },
  searchButton: {
    padding: 10,
    borderRadius: 5,
    marginRight: '3%',
  },
  voiceSearchButton: {
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchView;
