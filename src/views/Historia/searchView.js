import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const SearchView = ({ searchText, setSearchText, onSearch }) => {
  const handleSearch = () => {
    onSearch(searchText);
  };
  const handleVoiceSearch = () => {
    console.log('Voice search activated');
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
        onChangeText={(text) => onSearch(text)}
      />
      <TouchableOpacity style={styles.voiceSearchButton} onPress={handleVoiceSearch}>
        <FontAwesome name="microphone" size={24} color="white" />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
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