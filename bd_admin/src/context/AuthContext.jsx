import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const port = import.meta.env.REACT_APP_SERVER_PORT;

  // Load authentication state from localStorage on initial render
  useEffect(() => {
    const storedAuthState = sessionStorage.getItem('isLoggedIn');
    if (storedAuthState === 'true') {
      setIsLoggedIn(true);
    }
    setIsLoading(false); // Mark loading as complete
  }, []);
  const port = import.meta.env.VITE_BACKEND_PORT ;


  const login = async (username, password, onSuccess) => {
    try {
      const response = await axios.post(port + "validate-login", {
        username: username,
        password: password
      })

      if (response.status == 200) {
        setIsLoggedIn(true);
        sessionStorage.setItem('isLoggedIn', 'true'); // Persist login state
        if (onSuccess) onSuccess();
        // console.log("Called");
        return 0; // Successful login
      }
      else {
        throw new Error('Invalid credentials');
        return 1; //Invalid credentials
      }
    }
    catch (error) {
      console.log('Error making API call:', error);
      return 2; //Error
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn'); // Clear login state
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
