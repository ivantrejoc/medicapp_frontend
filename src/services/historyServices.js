import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const getStories = async () => {
  try {
    const rawResponse = await axios.get(`${URL}/stories`);
    const response = await rawResponse.data.body.stories;
    if (rawResponse.status === 200) {
      return response;
    }
  } catch (error) {
    return error.message;
  }
};

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

export const deleteHistory = async (id, patientId) => {
  try {
    const response = await axios.delete(
      `${URL}/history?id=${id}&patient_id=${patientId}`
    );
    if (response.status === 200) {
      console.log("RESPUESTA DE SERVICE:", response.data);
      return response.data;
    }
  } catch (error) {
    return error.message;
  }
};
