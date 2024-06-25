import axios from '../utils/axiosClient';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';

export default function ({ tags, categories }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const [dataToEdit, setDataToEdit] = useState(null);

  const fetchDataToEdit = async () => {
    const { data: p } = await axios.get(`/posts/${id}`);

    setDataToEdit({
      title: p.title,
      content: p.content,
      img: '',
      published: p.published,
      tags: p.tags.map((i) => i.id),
      categoryId: p.categoryId,
    });
  };

  useEffect(() => {
    fetchDataToEdit();
    return () => {
      setDataToEdit(null);
    };
  }, [id]);

  const updatePost = async (formData) => {
    console.log('formData', formData);
    //logica per salvare il post nel database
    const res = await axios.put(`/posts/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res);
    if (res.status < 400) {
      navigate(`/posts/${res.data.id}`);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <menu>
          <li>
            <Link to="../" relative="path">
              Annulla
            </Link>
          </li>
        </menu>
      </nav>
      {dataToEdit === null ? (
        <div>Loading...</div>
      ) : (
        <Form
          initialData={dataToEdit}
          tags={tags}
          categories={categories}
          onSubmit={updatePost}
        />
      )}
    </div>
  );
}
