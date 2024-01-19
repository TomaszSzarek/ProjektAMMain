import {
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { styles } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import NowyPin from "./NowyPIN.js";
GLOBAL = require("../../../globals");

const serverUrl = 'http://192.168.137.1:3004';


export function WidokKarty({ navigation }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [isPinChangeModalOpen, setIsPinChangeModalOpen] = useState(false);

  const getAuthenticatedUser = async () => {
    try {
      const response = await axios.get(`${serverUrl}/user/${GLOBAL.USERID}`);
      setAuthenticatedUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const zmienStatusPlatnosciZblizeniowych = async () => {
    try {
      var card = authenticatedUser.card;

      card.statusPlatnosciZblizeniowych = !card.statusPlatnosciZblizeniowych;

      await axios.patch(`${serverUrl}/user/${authenticatedUser.id}`, {
        card: card,
      });

      setAuthenticatedUser((prevState) => {
        return {
          ...prevState,
          card: card,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const zmienStatusKarty = async () => {
    try {
      var card = authenticatedUser.card;

      card.statusKarty = !card.statusKarty;

      await axios.patch(`${serverUrl}/user/${authenticatedUser.id}`, {
        card: card,
      });

      setAuthenticatedUser((prevState) => {
        return {
          ...prevState,
          card: card,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onPinConfirmHandler = async (pin) => {
    setIsPinChangeModalOpen(false);
    console.log(pin);
    try {
      var card = authenticatedUser.card;

      card.PIN = pin;

      await axios.patch(`${serverUrl}/user/${authenticatedUser.id}`, {
        card: card,
      });

      setAuthenticatedUser((prevState) => {
        return {
          ...prevState,
          card: card,
        };
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAuthenticatedUser();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../img/NeoBank.png")}
          style={styles.imageNeoBank}
        />
      </View>
      <Text style={styles.textStyle1}>Twoja Karta</Text>
      {isPinChangeModalOpen ? (
        <NowyPin
          userId={authenticatedUser.id}
          onCloseModal={() => setIsPinChangeModalOpen(false)}
          onPinConfirm={onPinConfirmHandler}
        />
      ) : null}
      <View>
        <Image
          source={require("../../../img/Karta.png")}
          style={styles.image}
        />
        <Text style={styles.textKarta1}>NeoBank</Text>
        <Text style={styles.textKarta2}>
        {authenticatedUser !== null ? authenticatedUser.card.numerKarty : null}
      </Text>
      </View>
      <Text style={styles.textStyle3}>
        Z twoją kartą można płacić przez telefon
      </Text>
      <View style={styles.separator} />
      <Pressable
        style={styles.presablebutton}
        onPress={zmienStatusPlatnosciZblizeniowych}
      >
        <Text style={styles.textPressable}>
          {authenticatedUser !== null
            ? authenticatedUser.card.statusPlatnosciZblizeniowych
              ? "Wyłącz płatności zbliżeniowe"
              : "Włącz płatności zbliżeniowe"
            : null}
        </Text>
      </Pressable>
      <Pressable
        style={styles.presablebutton}
        onPress={() => setIsPinChangeModalOpen(!isPinChangeModalOpen)}
      >
        <Text style={styles.textPressable}>Zmień PIN do karty</Text>
      </Pressable>
      <Pressable style={styles.presablebutton} onPress={zmienStatusKarty}>
        <Text style={styles.textPressable}>
          {authenticatedUser !== null
            ? authenticatedUser.card.statusKarty
              ? "Zastrzeż kartę"
              : "Odblokuj kartę"
            : null}
        </Text>
      </Pressable>
      <View style={styles.separator} />
      <Text style={styles.textStyle2}>Informacje o karcie</Text>
      <View style={styles.separator} />
      <View style={styles.separator} />
      <Text style={styles.textStyle4}>Numer karty</Text>
      <Text style={styles.textStyle5}>
        {authenticatedUser !== null ? authenticatedUser.card.numerKarty : null}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.textStyle4}>Numer rachunku</Text>
      <Text style={styles.textStyle5}>
        {authenticatedUser !== null
          ? authenticatedUser.numerRachunku
          : null}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.textStyle4}>PIN</Text>
      <Text style={styles.textStyle5}>
        {authenticatedUser !== null ? authenticatedUser.card.PIN : null}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.textStyle4}>Dane użytkownika</Text>
      <Text style={styles.textStyle5}>
        {authenticatedUser !== null
          ? `${authenticatedUser.firstName} ${authenticatedUser.lastName}`
          : null}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.textStyle4}>Termin ważności</Text>
      <Text style={styles.textStyle5}>
        {authenticatedUser !== null
          ? authenticatedUser.card.terminWaznosci
          : null}
      </Text>
      <View style={styles.separator} />
      <View style={styles.separator} />
      <Text style={styles.textStyle4}>Status Karty</Text>
      <Text style={styles.textStyle5}>
        {authenticatedUser !== null
          ? authenticatedUser.card.statusKarty
            ? "Aktywna"
            : "Zastrzeżona"
          : null}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.textStyle4}>Płatności zbliżeniowe</Text>
      <Text style={styles.textStyle5}>
        {authenticatedUser !== null
          ? authenticatedUser.card.statusPlatnosciZblizeniowych
            ? "Włączone"
            : "Wyłączone"
          : null}
      </Text>
    </ScrollView>
  );
}
