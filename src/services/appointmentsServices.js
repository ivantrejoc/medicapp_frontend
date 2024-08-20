import axios from "axios";

// const URL = import.meta.env.VITE_API_URL;

const URL = import.meta.env.VITE_DEV_API_URL;

export const getAppointmentsById = async (id) => {
  try {
    const rawResponse = await axios.get(`${URL}/appointment?id=${id}`);
    const response = await rawResponse.data.body.appointmentsById;
    return response;
  } catch (error) {
    return error.message;
  }
};

export const createAppointment = async (appointmentData) => {
  try {
    const user = await JSON.parse(localStorage.getItem("currentUser"));
    const jwtToken = user.token;
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
