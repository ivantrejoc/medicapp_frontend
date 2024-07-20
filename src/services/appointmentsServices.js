import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const getAppointmentsById = async (id) => {
  try {
    const rawResponse = await axios.get(`${URL}/appointment?id=${id}`);
    const response = await rawResponse.data.body.appointmentsById;   
    return response;
  } catch (error) {
    return error.message;
  }
};
