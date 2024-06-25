import { Children, createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStorage from '../hooks/useStorage';
import axios from '../utils/axiosClient.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useStorage(false, 'isLoggedIn'); //se vuoi usare il localStorage
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const login = async (payload, redirectTo) => {
    try {
      const { data: response } = await axios.post('/auth/login', payload);
      console.log(response);
      setIsLoggedIn(true);
      navigate(redirectTo || '/');
    } catch (err) {
      const { errors } = err.response.data;
      const error = new Error(
        errors ? 'Credenziali errate' : err.response.data
      );
      error.errors = errors;
      throw error;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const values = {
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const value = useContext(AuthContext);
  if (value === undefined) {
    throw new Error('Non sei dentro all Auth Provider');
  }
  return value;
};

export { AuthProvider, useAuth };
