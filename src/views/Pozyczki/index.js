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
import axios from "axios";
import { GetAuthenticatedUser } from "../../User";
import { useState } from "react";

const serverUrl = 'http://192.168.137.1:3004';


let typPozyczki = "";
let kwotaPozyczki = "";
let miesiac = "";
let rok = "";
let liczbaRat = "";
let liczbaWyliczonaKwota = "";

const inputTypPozyczki = (text) => {
  typPozyczki = text;
};

const inputKwotaPozyczki = (text) => {
  kwotaPozyczki = text;
};

const inputMiesiac = (text) => {
  miesiac = text;
};

const inputRok = (text) => {
  rok = text;
};

const inputLiczbaRat = (text) => {
  liczbaRat = text;
};

export function Pozyczki() {
  const navigation = useNavigation();
  const [error, setError] = useState(null);

  const wyslij = async () => {
    const pozyczka = {
      typPozyczki: typPozyczki,
      kwotaPozyczki: kwotaPozyczki,
      miesiac: miesiac,
      rok: rok,
      liczbaRat: liczbaRat,
    };

    try {
      const currentDate = new Date();

      if(pozyczka.miesiac < 1 || pozyczka.miesiac > 12) {
        throw new Error("Miesiac musi być w przedziale 1-12");
      }
      if(pozyczka.kwotaPozyczki < 0) {
        throw new Error("Kwota nie może być ujemna");
      }
      if (pozyczka.liczbaRat < 0) {
        throw new Error("Liczba rat nie może być ujemna");
      }
      if (pozyczka.rok < currentDate.getFullYear() || (pozyczka.miesiac <= currentDate.getMonth() + 1 && pozyczka.rok == currentDate.getFullYear())) {
        throw new Error("Data spłaty pożyczki musi być w przyszłości");
      }
    } catch(err) {
      setError(err.message);
      return;
    }

    try {
      let authenticatedUser = await GetAuthenticatedUser();
  
      let zaktualizowanePozyczki = [
        ...authenticatedUser.pozyczki,
        {
          typ: pozyczka.typPozyczki,
          kwota: pozyczka.kwotaPozyczki,
          miesiac: pozyczka.miesiac,
          rok: pozyczka.rok,
          liczbaRat: pozyczka.liczbaRat
        }
      ]

      await axios.patch(`${serverUrl}/user/${authenticatedUser.id}`, {
        pozyczki: zaktualizowanePozyczki
      })

      await axios.patch(`${serverUrl}/user/${authenticatedUser.id}`, {
        dostepneSrodki: Number(authenticatedUser.dostepneSrodki) + Number(pozyczka.kwotaPozyczki)
      })

      navigation.navigate("ProduktyView");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.header}>
        <Image
          source={require("../../img/NeoBank.png")}
          style={styles.imageNeoBank}
        />
      </View>
      <Text style={styles.textStyle1}>Weź pożyczke</Text>
      <View style={styles.separator} />
      <Text style={styles.textStyle1}>Typ Pożyczki</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          style={styles.input}
          onChangeText={inputTypPozyczki}
          placeholder="Wprowadź tutaj"
        />
      </View>
      <Text style={styles.textStyle1}>Kwota Pożyczki</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={inputKwotaPozyczki}
          maxLength={7}
          placeholder="Wprowadź tutaj"
        />
      </View>
      <Text style={styles.textStyle1}>Miesiąc</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="numeric"
          onChangeText={inputMiesiac}
          placeholder="Wprowadź tutaj"
        />
      </View>
      <Text style={styles.textStyle1}>Rok</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          style={styles.input}
          maxLength={4}
          keyboardType="numeric"
          onChangeText={inputRok}
          placeholder="Wprowadź tutaj"
        />
      </View>
      <Text style={styles.textStyle1}>Liczba rat</Text>
      <View style={styles.textbuttoninPut}>
        <TextInput
          style={styles.input}
          maxLength={3}
          keyboardType="numeric"
          onChangeText={inputLiczbaRat}
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
        onPress={() => navigation.navigate("ProduktyView")}
      >
        <Text style={styles.text}>Anuluj</Text>
      </Pressable>
    </ScrollView>
  );
}
