import axios from "axios";

// Production
// const URL = import.meta.env.VITE_API_URL;

const URL = import.meta.env.VITE_DEV_API_URL;

export const createPatient = async (patientData) => {
  try {
    const response = await axios.post(`${URL}/patients/signup`, patientData);
    if (response.status === 201) {
      return response.data;
    }
    throw new Error(response.error.message);
  } catch (error) {
    console.error("ERROR EN SERVICE: ", error);
    return error.message;
  }
};

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${URL}/auth/signin`, userData);
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message
    };
  }
};

export const getPatientById = async (id) => {
  try {
    const response = await axios.get(`${URL}/patient?id=${id}`);
    const patient = response.data.body;
    return patient;
  } catch (error) {
    return error.response;
  }
};


export const signOut = async () => {
  try {
    const response = await axios.post(`${URL}/auth/signout`);
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message
    };
  }
};