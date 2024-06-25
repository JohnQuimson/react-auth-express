import React from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <h1>Benvenuto {user.name}!</h1> : <h1>Benvenuto!</h1>}
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
