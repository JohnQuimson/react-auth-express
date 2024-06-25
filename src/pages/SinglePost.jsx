import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${apiUrl}/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching the post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  console.log(post);

  return (
    <>
      <h2>Post Title: {post.title}</h2>
      {/* <p>Category: {post.category.name}</p> */}
      <p>Content: {post.content}</p>
      <p>Published: {post.published ? 'Yes' : 'No'}</p>
      <p>Tags: {post.tags.map((tag) => tag.name).join(', ')}</p>
    </>
  );
};

export default SinglePost;
