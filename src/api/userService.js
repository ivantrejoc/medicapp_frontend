import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const getUserById = async (id) => {
  try {
    const response = (await axios.get(`${URL}/patient?id=${id}`)).data.body;
    return response;
  } catch (error) {
    return error.response;
  }
};
