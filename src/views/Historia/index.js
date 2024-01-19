import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image } from "react-native";
import { styles } from './style';
import DateInputField from './date.js';
import SearchView from './searchView.js';
import PlatnosciList from './PlatnosciList';
import { GetAuthenticatedUser } from '../../User';
GLOBAL = require('../../globals');

export function Historia({ navigation }) {
  const [platnosci, setPlatnosci] = useState(null);
  const [wyswietlanePlatnosci, setWyswietlanePlatnosci] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const ladujPlatnosci = async () => {
    try {
      let authenticatedUser = await GetAuthenticatedUser();

      setWyswietlanePlatnosci(authenticatedUser.platnosci);
      setPlatnosci(authenticatedUser.platnosci);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearchByName = (text) => {
    setSearchText(text);
    const filteredPlatnosci = platnosci.filter((platnosc) =>
      platnosc.nazwa.toLowerCase().includes(text.toLowerCase())
    );
    setWyswietlanePlatnosci(filteredPlatnosci);
  };

  const handleSearchByDate = (date) => {
    console.log(date);
    setSelectedDate(date);
    const filteredPlatnosci = platnosci.filter((platnosc) =>
      platnosc.date === date
    );
    setWyswietlanePlatnosci(filteredPlatnosci);
  };

  useEffect(() => {
    ladujPlatnosci();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
      </View>
      <Text style={styles.textStyle3}>Historia Płatności</Text>
      <Text style={styles.textStyle4}>Wybierz konto</Text>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle1}>123413242</Text>
        <Text style={styles.textStyle2}>Karta płatnicz do konta</Text>
      </View>
      <Text style={styles.textStyle4}>Wybierz datę</Text>
      <View style={styles.Container2}>
        <DateInputField onDateChange={handleSearchByDate} />
      </View>
      <View style={styles.separator} />
      <SearchView
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={handleSearchByName} />
      {platnosci !== null ? <PlatnosciList platnosci={wyswietlanePlatnosci} /> : null}
    </ScrollView>
  );
}
