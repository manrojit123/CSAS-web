import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const pathname = useParams();
  console.log(pathname);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`http://apparentselves.org/api/blog/${pathname.id}/detail`);
      setBlog(response.data.data);
    };
    fetchBlog();
  }, [pathnam.id]);

  return (
    <div>
      {blog ? (
        <>Hello</>
        // <div>
        //   <h1>{blog.title}</h1>
        //   <p>{blog.description}</p>
        //   <img src={blog.image} alt={blog.title} />
        //   {blog.comments.map((comment) => (
        //     <div key={comment.id}>
        //       <h3>{comment.name}</h3>
        //       <p>{comment.message}</p>
        //     </div>
        //   ))}
        // </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogSingle;
