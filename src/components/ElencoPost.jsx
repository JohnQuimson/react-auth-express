import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from './PostCard';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const ElencoPost = ({ response }) => {
  console.log('Response in ElencoPost:', response);

  // Accedi correttamente ai post dalla risposta
  const posts = response?.data || [];
  console.log('POSTS:', posts);

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={`post${post.id}`} className="post">
          <h2>{post.title}</h2>
          <img src={post.img} alt={post.title} style={{ width: '200px' }} />
          <p>{post.content}</p>
          <p>Published: {post.published ? 'Yes' : 'No'}</p>
          <p>Tags: {post.tags.map((tag) => tag.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ElencoPost;
