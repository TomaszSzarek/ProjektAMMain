import axios from 'axios';
const serverUrl = 'http://192.168.137.1:3004'; 

async function sprawdzIstnienieUzytkownika(verificationCode) {
  try {
    const response = await axios.get(`${serverUrl}/user?verificationCode=${verificationCode}`);
    return response.data.length > 0;
  } catch (error) {
    console.error('Błąd podczas sprawdzania istnienia użytkownika:', error);
    return false; 
  }
}

async function Rejestracja(userData) {
  const { verificationCode } = userData;

  const istniejacyUzytkownik = await sprawdzIstnienieUzytkownika(verificationCode);

  if (istniejacyUzytkownik) {
    console.log('Użytkownik o podanym verificationCode już istnieje.');
    return; 
  }

  console.log('Użytkownik o podanym verificationCode nie istnieje. Rejestrowanie...');

  const cardsWithAdditionalInfo = [
    {
      numerKarty: Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000,
      status: 'Aktywna',
      zablokujCzasowo: 0,
      PIN: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
      zastrzezKarte: 0,
      oplataZaBierzacyOkres: 0,
      terminWaznosci: '02.01.2037',
      sbezpieczenieKarty: 0,
      platnosciZblizeniowe: 'włączone',
      statusKarty: false,//
      limitKarty:1000 //
    },
  ];

  const updatedUserData = {
    ...userData,
    dostepneSrodki: 0,
    limitPrzelewow: 1000,
    cards: cardsWithAdditionalInfo,
  };

  try {
    const response = await axios.post(`${serverUrl}/user`, updatedUserData);
    console.log('Użytkownik zarejestrowany pomyślnie.');
  } catch (error) {
    console.error('Błąd podczas rejestracji użytkownika:', error);
  }
}

module.exports = Rejestracja;