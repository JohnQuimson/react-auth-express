import React from 'react';
import Navbar from '../components/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const DefaultLayout = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login/" />;

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
