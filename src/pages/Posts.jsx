import React, { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_API_URL;
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get(`${apiUrl}/posts`).then(({ data }) => setPosts(data));
  }, []);

  console.log('POST', posts);

  return (
    <>
      <h1>POSTS</h1>
      {posts === null ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.data.map((p) => (
            <li key={`post${p.id}`}>
              <Link to={`/posts/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
