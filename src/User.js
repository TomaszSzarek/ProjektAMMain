import axios from "axios";

const serverUrl = 'http://192.168.137.1:3004';

export async function GetAuthenticatedUser() {
  try {
    const response = await axios.get(`${serverUrl}/user/${GLOBAL.USERID}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}