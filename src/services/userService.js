import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const createPatient = async (patientData) => {
  try {
    const response = await axios.post(`${URL}/patients`, patientData);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.response;
  }
};

export const getPatients = async () => {
  try {
    const response = await axios.get(`${URL}/patients`);
    const patients = response.data.body;
    console.log("LISTA PACIENTES: ", patients);
    return patients;
  } catch (error) {
    console.log(error.response);
    return error.response;
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
