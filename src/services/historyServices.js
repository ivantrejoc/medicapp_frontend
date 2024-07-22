import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const createHistory = async (historyData) => {
  try {
    const response = await axios.post(`${URL}/history`, historyData);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.message;
  }
};

export const editHistory = async (historyData) => {
  try {
    const response = await axios.put(`${URL}/history`, historyData);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.message;
  }
};
