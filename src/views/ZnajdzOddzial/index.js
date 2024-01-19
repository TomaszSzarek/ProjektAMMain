import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image } from "react-native";
import { styles } from './style';
import SearchView from './searchView.js';
import OddzialyList from './OddzialyList.js';
GLOBAL = require('../../globals');

export function ZnajdzOddzial({ navigation }) {
  const defaultOddzialy = [
    {
      miasto: "Kielce",
      nazwa: "Odzial1",
      szerokosc:50.8634699, 
      dlugosc:20.6301082
    },
    {
        miasto: "Kielce",
        nazwa: "Odzial2",
        szerokosc:50.8784813, 
        dlugosc:20.6434669
    },
    {
        miasto: "Kielce",
        nazwa: "Test",
        szerokosc:49.0416744, 
        dlugosc:20.9435724
    },
    {
        miasto: "Krakow",
        nazwa: "Odzial3",
        szerokosc:50.0416744, 
        dlugosc:19.9435724
    }
    
  ];

  const [oddzialy, setOddzialy] = useState(defaultOddzialy);
  const [searchText, setSearchText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSearchByName = (text) => {
    setSearchText(text);
    const filteredOddzialy = defaultOddzialy.filter((oddzialy) =>
    oddzialy.miasto.toLowerCase().includes(text.toLowerCase())
    );
    setOddzialy(filteredOddzialy);
  };

  const handleSearchByLocation = (latitude, longitude) => {
    setSelectedLocation(`Szerokość: ${latitude}, Długość: ${longitude}`);
    
    const nearbyOddzialy = defaultOddzialy.filter((oddzial) => {
      const latDiff = Math.abs(oddzial.szerokosc - latitude);
      const lonDiff = Math.abs(oddzial.dlugosc - longitude);
      return latDiff <= 0.1 && lonDiff <= 0.1;
    });
    setOddzialy(nearbyOddzialy);
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
      </View>
      <Text style={styles.textStyle3}>Mapa odziałów</Text>
      <View style={styles.separator} />
      <SearchView
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={handleSearchByName}
        onLocationSearch={handleSearchByLocation}
      />
      <OddzialyList oddzialy={oddzialy} />
    </ScrollView>
  );
}
