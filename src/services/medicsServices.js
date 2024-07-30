import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const getMedics = async () => {
  try {
    const rawResponse = await axios.get(`${URL}/medics`);
    const response = await rawResponse.data.body.medics;
    return response;
  } catch (error) {
    console.error;
    return error.message;
  }
};
