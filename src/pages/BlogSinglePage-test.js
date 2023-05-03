import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function BlogSinglePage(props) {
  const [blogData, setBlogData] = useState({});
  const [commentsList, setCommentsList] = useState([]);
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const pathname = useParams();

//   const { postId } = props.match.params;

  useEffect(() => {
    // Fetch blog details
    axios
      .get(`http://apparentselves.org/api/blog/${pathname.postId}/detail`)
      .then((response) => {
        setBlogData(response.data.data);
        setCommentsList(response.data.data.comments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pathname.postId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCommentForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Post comment
    axios
      .post(`http://apparentselves.org/api/blog/${pathname.postId}/comment`, commentForm)
      .then((response) => {
        setCommentsList(response.data);
        setCommentForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>{blogData.title}</h1>
      <p>{blogData.description}</p>
      <img src={blogData.image} alt={blogData.title} />
      <h2>Comments</h2>
      <ul>
        {commentsList.map((comment, index) => (
          <li key={index}>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.message}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={commentForm.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={commentForm.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={commentForm.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BlogSinglePage;