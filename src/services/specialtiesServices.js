import axios from "axios";

// const URL = import.meta.env.VITE_API_URL;

const URL = import.meta.env.VITE_DEV_API_URL;
 
export const getSpecialties = async () => {
  try {
    const user = await JSON.parse(localStorage.getItem("currentUser"));
    const jwtToken = user.token;
    const rawResponse = await axios.get(`${URL}/specialties`,{
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
    if(rawResponse.status !== 200){
      throw new Error(rawResponse.statusText);
    }
    const response = await rawResponse.data.specialties;
    return response;
  } catch (error) {
    console.error;
    return error.message;
  }
};
