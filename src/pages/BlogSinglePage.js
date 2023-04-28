import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogSinglePage(props) {
  const [blog, setBlog] = useState({});
  const pathname = useParams();
  console.log(pathname);

  useEffect(() => {
    // Fetch blog data from API and update state
    axios
      .get(`http://apparentselves.org/api/blog/${pathname.postId}/detail`)
      .then((response) => {
        setBlog(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pathname.postId]);

  // Check if blog object exists before rendering its properties
  if (!blog || Object.keys(blog).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">
          <h2>{blog.title}</h2>
          <img src={blog.image} alt={blog.title} className="img-fluid rounded-10 my-4 singlePostImage"/>
          <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
        </div>
      </div>
    </div>
  );
}

export default BlogSinglePage;
