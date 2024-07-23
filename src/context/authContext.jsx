import { useEffect, createContext, useState } from "react";
import { signIn } from "../services/userServices";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("isAuth", JSON.stringify(currentUser));
  }, [currentUser, isAuth]);

  const login = async (userData) => {
    try {
      const userCredential = await signIn(userData);
      const status = userCredential.status;
      const user = userCredential.data;
      if (status === true) {
        setCurrentUser(user);
        setIsAuth(true);
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

  console.log("isAuth en Context despues de login:", isAuth);

  const logout = () => {
    setCurrentUser(null);
    setIsAuth(false);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAuth");
  };

  const value = {
    currentUser,
    isAuth,
    login,
    logout,
    error
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
