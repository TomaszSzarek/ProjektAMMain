import {
  Pressable,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { GetAuthenticatedUser } from "../../../User";
import { useEffect, useState } from "react";
import axios from "axios";

const serverUrl = 'http://192.168.137.1:3004';


let nazwaAdres = "";
let tytul = "";

export function PrzelewNaTelefon() {
  const [error, setError] = useState(null);
  const [kwota, setKwota] = useState(0);
  const [numerTelefonu, setNumerTelefonu] = useState("");
  const [nazwa, setNazwa] = useState("");
  const [tytul, setTytul] = useState("");
  const navigation = useNavigation();

  const inputKwota = (text) => {
    setKwota(text);
  };

  const inputTelefon = (text) => {
    setNumerTelefonu(text);
  };

  const inputNazwaAdres = (text) => {
    setNazwa(text);
  };
  
  const inputTytul = (text) => {
    setTytul(text);
  };

  const sprawdzCzyTelefonIstnieje = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/user?phoneNumber=${numerTelefonu}`
      );

      return response.data.length > 0;
    } catch (err) {
      console.log(err);
    }
  };

  const getUserByPhone = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/user?phoneNumber=${numerTelefonu}`
      );

      return response.data[0];
    } catch (err) {
      console.log(err);
    }
  };

  const odejmijNadawcy = async (nadawca) => {
    try {
      const zaktualizowaneSrodki = Number(nadawca.dostepneSrodki) - Number(kwota);

      await axios.patch(`${serverUrl}/user/${nadawca.id}`, {
        dostepneSrodki: zaktualizowaneSrodki,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const dodajOdbiorcy = async (odbiorca) => {
    try {
      const zaktualizowaneSrodki = Number(odbiorca.dostepneSrodki) + Number(kwota);

      await axios.patch(`${serverUrl}/user/${odbiorca.id}`, {
        dostepneSrodki: zaktualizowaneSrodki,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getDateString = () => {
    const currentDate = new Date();

    const prefix = currentDate.getUTCMonth().length > 0 ? "" : "0";

    const dateString = currentDate.getDate() + "." + prefix + (currentDate.getUTCMonth() + 1) + "." + currentDate.getFullYear();
    
    return dateString;
  }

  const dodajPlatnosc = async (nadawca, numerRachunkuOdbiorcy) => {
    const currentDate = getDateString();

    try {
      const zaktualizowanePlatnosci = [
        ...nadawca.platnosci,
        {
          kwota: Number(kwota),
          konto: numerRachunkuOdbiorcy,
          nazwa: nazwa,
          tytul: tytul,
          date: currentDate
        }
      ]

      await axios.patch(`${serverUrl}/user/${nadawca.id}`, {
        platnosci: zaktualizowanePlatnosci,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const wyslij = async () => {
    const authenticatedUser = await GetAuthenticatedUser();

    try {
      if (kwota < 0) {
        throw new Error("Kwota nie może być ujemna");
      }
      if (authenticatedUser.dostepneSrodki - kwota < 0) {
        throw new Error("Niewystarczające środki");
      }
      if (authenticatedUser.phoneNumber == numerTelefonu) {
        throw new Error("Nie możesz dokonać przelewu na własne konto");
      }

      let czyTelefonIstnieje = await sprawdzCzyTelefonIstnieje();

      if (!czyTelefonIstnieje) {
        throw new Error("Podany numer telefonu nie istnieje");
      }

      let odbiorca = await getUserByPhone();

      await odejmijNadawcy(authenticatedUser);
      await dodajPlatnosc(authenticatedUser, odbiorca.numerRachunku);
      await dodajOdbiorcy(odbiorca);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setError(null);
  }, [kwota]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../img/NeoBank.png")}
          style={styles.imageNeoBank}
        />
      </View>
      <Text style={styles.textStyle1}>Na Numer Telefonu</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={inputTelefon}
          placeholder="Wprowadź tutaj"
        />
      </View>
      <Text style={styles.textStyle1}>Nazwa i adres odbiorcy</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          style={styles.input}
          onChangeText={inputNazwaAdres}
          placeholder="Wprowadź tutaj"
        />
      </View>
      <Text style={styles.textStyle1}>Kwota</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={inputKwota}
          placeholder="Wprowadź tutaj"
        />
      </View>
      <Text style={styles.textStyle1}>Tytuł</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          style={styles.input}
          onChangeText={inputTytul}
          placeholder="Wprowadź tutaj"
        />
      </View>
      <View>
        <Text style={styles.errorMessage}>
          {error !== null ? `${error} !!!` : null}
        </Text>
      </View>
      <Pressable style={styles.textbutton} onPress={wyslij}>
        <Text style={styles.text}>Zatwierdź</Text>
      </Pressable>
      <Pressable
        style={styles.textbutton}
        onPress={() => navigation.navigate("PlatnosciView")}
      >
        <Text style={styles.text}>Anuluj</Text>
      </Pressable>
    </ScrollView>
  );
}
