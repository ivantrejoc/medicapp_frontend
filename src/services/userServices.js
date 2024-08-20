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
    const response = await axios.get(`${URL}/patients`);
    const apiUsers = response.data.body.patients;
    const userFound = await apiUsers?.find(
      (apiUser) =>
        apiUser.email === userData.email &&
        apiUser.password === userData.password
    );
    if (userFound) {
      return {
        status: true,
        data: {
          id: userFound.id,
          name: userFound.name,
          lastName: userFound.surname
        }
      };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    return {
      status: false,
      data: error.message
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
