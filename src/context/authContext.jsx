import { useEffect, createContext, useState } from "react";
import { signIn } from "../services/userServices";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = async (userData) => {
    try {
      const userCredential = await signIn(userData);
      const status = userCredential.status;
      const user = userCredential.data;
      if (status === true) {
        setCurrentUser(user);
        return userCredential;
      } else {
        throw new Error(userCredential.data);
      }
    } catch (error) {
      setError(error.message);
      return {
        status: false,
        data: error.message
      };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const value = {
    currentUser,
    login,
    logout,
    error
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
