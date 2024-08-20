import axios from "axios";

// const URL = import.meta.env.VITE_API_URL;

const URL = import.meta.env.VITE_DEV_API_URL;
const user = await JSON.parse(localStorage.getItem("currentUser"));
const jwtToken = user.token;

export const getAppointmentsById = async (id) => {
  try {
    const rawResponse = await axios.get(`${URL}/appointments/patient/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
    if (rawResponse.status !== 200) {
      throw new Error(rawResponse.data.message);
    }
    const response = await rawResponse.data;
    return response;
  } catch (error) {
    return {
      status: error.rawResponse.status,
      message: error.rawResponse.data.message
    };
  }
};

export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(
      `${URL}/appointments/create`,
      appointmentData,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      }
    );
    if (response.status !== 201) {
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
