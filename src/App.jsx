import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from './utils/axiosClient.js';
// import axios from 'axios';
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
import EditPost from './pages/EditPost';
import CreatePost from './pages/CreatePost';
import AdminPage from './middlewares/AdminPage';

const App = () => {
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const { data: tagsData } = await axios.get(`/tags`);
    const { data: categoriesData } = await axios.get(`/categories`);
    setTags(tagsData);
    setCategories(categoriesData);
    console.log({ tagsData, categoriesData });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Rotte Pubbliche */}
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="posts" element={<Posts />} />
            </Route>

            {/* Rotte Private */}
            <Route
              path="/"
              element={
                <PrivatePage>
                  <DefaultLayout />
                </PrivatePage>
              }
            >
              <Route path="posts/:id" element={<SinglePost />} />
            </Route>

            {/* Rotte Admin */}
            <Route
              path="/"
              element={
                <PrivatePage>
                  <AdminPage>
                    <DefaultLayout />
                  </AdminPage>
                </PrivatePage>
              }
            >
              <Route path="posts">
                <Route path=":id/edit" element={<EditPost />} />
                <Route
                  path="create"
                  element={<CreatePost tags={tags} categories={categories} />}
                />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
