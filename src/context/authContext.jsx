import { useEffect, createContext, useState } from "react";
import { signIn, signOut } from "../services/userServices";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("isAuth", JSON.stringify(currentUser));
  }, [currentUser, isAuth]);

  const login = async (userData) => {
    try {
      const userCredential = await signIn(userData);
      const user = {
        status: userCredential.message,
        id: userCredential.id,
        name: userCredential.name,
        lastName: userCredential.lastName,
        email: userCredential.email,
        token: userCredential.token
      };
      if (user.status !== "User Authenticated") {
        throw new Error(userCredential.message);
      }
      setCurrentUser(user);
      setIsAuth(true);
      return user.status;
    } catch (error) {
      setError(error.message);
      return {
        status: "User Unauthenticated",
        message: error.message
      };
    }
  };

  const logout = async () => {
    try {
      const response = await signOut();
      if(!response.message === "Logged out successfully" ){
        throw new Error(response.error);
      }
      setCurrentUser(null);
        setIsAuth(false);
        localStorage.removeItem("currentUser");
        localStorage.removeItem("isAuth");
    } catch (error) {
      return {
        status: error.response.status,
        message: error.response.message
      };
    }
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
