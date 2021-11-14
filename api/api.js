import axios from "axios";

const URL = "https://api.alegra.com/api/v1/contacts/";
const USER = "fabianpacherres@gmail.com";
const TOKEN = "2add062b6d3f230a319a";

export default async function getDataApi() {
  try {
    const response = await axios.get(URL, {
      auth: {
        username: USER,
        password: TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
