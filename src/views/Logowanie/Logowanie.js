import axios from 'axios';
const serverUrl = 'http://192.168.137.1:3004';

async function logowanie(verificationCode, password) {
  try {
    const response = await axios.get(`${serverUrl}/user?verificationCode=${verificationCode}&password=${password}`);

    if (response.status === 200) {
      const responseData = response.data;
      console.log('Zalogowano pomyślnie:');
      if(responseData.length !== 0){
        var userId = responseData[0].id;
        GLOBAL.USERID = userId;
        return true;
      }
    } else {
      console.error('Błąd logowania:', response.data);
      return false;
    }
  } catch (error) {
    console.error('Błąd sieci:', error);
  }
}

module.exports = logowanie; 
