import { Pressable, Text, View, Image } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import ModalComponent from "./ModalComponent/ModalComponent";
import { GetAuthenticatedUser } from "../../User";
import axios from "axios";

const serverUrl = 'http://192.168.137.1:3004';


export function Profil({ navigation }) {
  const [modalState, setModalState] = useState({
    isModalOpen: false,
    modalType: ""
  });

  const zmienPowiadomiena = () => {
    console.log(`zmien powiadomienia`);
  };

  const zmienPin = async (value) => {
    const authenticatedUser = await GetAuthenticatedUser();

    try {
      await axios.patch(`${serverUrl}/user/${authenticatedUser.id}`, {
        PIN: value,
      });
    } catch (err)
    {
      console.log(err);
    }
  };

  const zmienLimitKarty = async (value) => {
    const authenticatedUser = await GetAuthenticatedUser();

    try {
      await axios.patch(`${serverUrl}/user/${authenticatedUser.id}`, {
        card: {
          ...authenticatedUser.card,
          limitKarty: value
        },
      });
    } catch (err)
    {
      console.log(err);
    }
  };

  const zmienLimitPrzelewow = async (value) => {
    const authenticatedUser = await GetAuthenticatedUser();
    console.log(authenticatedUser)

    try {
      await axios.patch(`${serverUrl}/user/${authenticatedUser.id}`, {
        limitPrzelewow: value,
      });
    } catch (err)
    {
      console.log(err);
    }
  };

  const onChangeConfirmHandler = async (modalValue) => {
    switch(modalState.modalType) {
      case "limitKarty":
        await zmienLimitKarty(modalValue);
        break;
      case "limitPrzelewow":
        await zmienLimitPrzelewow(modalValue);
        break;
      case "pin":
        await zmienPin(modalValue);
        break;
    }
    setModalState({isModalOpen:false})
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../img/NeoBank.png")}
          style={styles.imageNeoBank}
        />
      </View>{modalState.isModalOpen ? (
        <ModalComponent
          onCloseModal={() => setModalState({modalType: this.modalType, isModalOpen: false})}
          onChangeConfirm={onChangeConfirmHandler}
        />
      ) : null}
      <Text style={styles.textStyle1}>Ustawienia Profilu</Text>
      <View style={styles.separator} />
      <Text style={styles.textStyle1}>Wygląd i dostęp</Text>
      <Pressable style={styles.presablebutton} onPress={() => setModalState({isModalOpen: true, modalType: "pin"})}>
        <Text style={styles.textPressable}>Zmień PIN</Text>
      </Pressable>
      <View style={styles.separator} />
      <Text style={styles.textStyle1}>Limity</Text>
      <Pressable style={styles.presablebutton} onPress={() => setModalState({isModalOpen: true, modalType: "limitKarty"})}>
        <Text style={styles.textPressable}>Zmień limit dla karty</Text>
      </Pressable>
      <Pressable style={styles.presablebutton} onPress={() => setModalState({isModalOpen: true, modalType: "limitPrzelewow"})}>
        <Text style={styles.textPressable}>Zmień limit dla przelewów</Text>
      </Pressable>
      <View style={styles.separator} />
      <Text style={styles.textStyle1}>Dodatkowe</Text>
      <Pressable style={styles.presablebutton} onPress={zmienPowiadomiena}>
        <Text style={styles.textPressable}>Włącz powiadomienia na telefon</Text>
      </Pressable>
    </View>
  );
}
