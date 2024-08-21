import axios from "axios";

// const URL = import.meta.env.VITE_API_URL;

const URL = import.meta.env.VITE_DEV_API_URL;

export const getStoryById = async (patientId) => {
  try {
    const user = await JSON.parse(localStorage.getItem("currentUser"));
    const jwtToken = user.token;
    const rawResponse = await axios.get(
      `${URL}/medical-stories/story/${patientId}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      }
    );
    const response = await rawResponse.data.medicalStory;    
    if (rawResponse.status !== 200) {
      throw new Error(response.data.message);
    }    
    return response;
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message
    };
  }
};

export const createHistory = async (historyData) => {
  try {
    const user = await JSON.parse(localStorage.getItem("currentUser"));
    const jwtToken = user.token;
    const response = await axios.post(
      `${URL}/medical-stories/create`,
      historyData,
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
