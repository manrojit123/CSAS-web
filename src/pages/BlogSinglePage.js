import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogSinglePage() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
        // console.log(response.data); // log the response data
        setPost(response.data);
      })
      .catch(error => console.log(error));
  }, [postId]);
//   console.log(post);

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-8 mx-auto'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    </div>
  );
}

export default BlogSinglePage;