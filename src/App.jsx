import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form';
import ElencoPost from './components/ElencoPost';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import SinglePost from './pages/SinglePost';
import Posts from './pages/Posts';
const apiUrl = import.meta.env.VITE_BASE_API_URL;
import { AuthProvider } from './contexts/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import PrivatePage from './middlewares/PrivatePage';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Pubbliche */}
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="login" element={<Login />}></Route>
              {/* <Route path="posts">
                <Route index element={<Posts />} />
                <Route path=":id">
                  <Route index element={<SinglePost />} />
                </Route>
              </Route> */}
            </Route>
            {/* Private */}
            <Route
              path="/"
              element={
                <PrivatePage>
                  <DefaultLayout />
                </PrivatePage>
              }
            >
              <Route path="posts">
                <Route index element={<Posts />} />
                <Route path=":id">
                  <Route index element={<SinglePost />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
