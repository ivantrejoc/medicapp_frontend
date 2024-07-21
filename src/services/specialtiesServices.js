import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const getSpecialties = async () => {
  try {
    const rawResponse = await axios.get(`${URL}/specialties`);
    const response = await rawResponse.data.body.specialties;
    return response;
  } catch (error) {
    console.error;
    return error.message;
  }
};
