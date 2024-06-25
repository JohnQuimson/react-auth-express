import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from '../utils/axiosClient';
import Form from '../components/Form';

import React from 'react';

export default function ({ tags, categories }) {
  const navigate = useNavigate();

  const createPost = async (formData) => {
    console.log(formData);

    const res = await axios.post(`/posts`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res);
    if (res.status < 400) {
      navigate(`/posts/${res.data.slug}`);
    }
  };

  return (
    <div>
      <Link to="../" relative="path">
        Torna indietro
      </Link>
      <Form
        tags={tags}
        categories={categories}
        onSubmit={(data) => navigate(`posts/${data.slug}`)}
      />
    </div>
  );
}
