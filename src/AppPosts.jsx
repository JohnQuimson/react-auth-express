import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import axios from './utils/axiosClient.js';
import Form from './components/Form';
import ElencoPost from './components/ElencoPost';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

export default function () {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [response, setResponse] = useState(null);

  const fetchPosts = async () => {
    try {
      setResponse(null);
      const url = `/posts`;
      const { data: response } = await axios.get(url);
      setResponse(response);
      console.log('Posts ricevuti:', response);
    } catch (error) {
      console.error('Errore durante il recupero dei post:', error);
      // Gestisci l'errore, ad esempio mostrando un messaggio di errore all'utente
    }
  };

  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    try {
      const { data: array } = await axios.get(`/tags`);
      setTags(array);
      console.log('tags ricevuti:', array);
    } catch (error) {
      console.error('Errore durante il recupero dei tags:', error);
    }
  };

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const { data: array } = await axios.get(`/categories`);
      setCategories(array);
      console.log('Categorie ricevute:', array);
    } catch (error) {
      console.error('Errore durante il recupero delle Categories:', error);
      // Gestisci l'errore, ad esempio mostrando un messaggio di errore all'utente
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchTags();
    fetchCategories();
  }, []);

  return (
    <>
      <div style={{ padding: '1rem' }}>
        <button onClick={() => setShowCreateForm((curr) => !curr)}>
          {showCreateForm ? 'Annulla' : 'Crea Post'}
        </button>
      </div>
      {showCreateForm && (
        <Form
          tags={tags}
          categories={categories}
          onCreate={() => {
            setShowCreateForm(false);
            fetchPosts();
          }}
        />
      )}
      <ElencoPost response={response} />
    </>
  );
}
