import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(`http://apparentselves.org/api/blogs?page=${currentPage}`);
      setBlogs(response.data.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;