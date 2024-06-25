import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export default function () {
  const { login } = useAuth();

  const initialData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialData);

  // constChangeData = (key, value) => {
  //   setFormData((curr) => ({
  //     ...curr,
  //     [key]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    setFormData(initialData);
  };

  const { state } = useLocation();
  const { redirectTo } = state || {};

  const handleLogin = (e) => {
    e.preventDefault();
    login(null, redirectTo || '');
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  );
}
