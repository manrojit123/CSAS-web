import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogSinglePage(props) {
  const [blog, setBlog] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [blogLoad, setBlogLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const pathname = useParams();
  // console.log(pathname);

  useEffect(() => {
    // Fetch blog data from API and update state
    axios
      .get(`http://apparentselves.org/api/blog/${pathname.postId}/detail`)
      .then((response) => {
        if (response.data.code === 200) {
          setBlog(response.data.data);
          setBlogLoad(false);
        } else {
          setBlogLoad(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pathname.postId]);

  // Check if blog object exists before rendering its properties
  // if (!blog || Object.keys(blog).length === 0) {
  //   return <div>Loading...</div>;
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear any existing error messages
    setNameError("");
    setEmailError("");
    setMessageError("");
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    // Validate name, email, and message fields
    if (!name || !email || !message) {
      if (!name) {
        setNameError("Please enter your name");
      }
      if (!message) {
        setMessageError("Please enter a message");
      }
      if (!email) {
        setEmailError("Please enter your email address");
      } else if (email && !validEmail) {
        setEmailError("Please enter a valid email address");
      } else {
      }

      return;
    }

    setLoading(true);
    axios
      .post(`http://apparentselves.org/api/blog/${pathname.postId}/comment`, {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        setLoading(false);
        setResponse(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  return (
    <div className="content blogContent  d-flex align-items-center justify-content-center">
      {blogLoad ? (
        <div className="">
          <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto">
                <h1 className="title">{blog.title}</h1>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid rounded-10 my-4 singlePostImage"
                />
                <div
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                ></div>
                <hr></hr>
              </div>
            </div>
            <div className="row mt-4 pt-4" >
              <div className="col-6 offset-1">
                <h3 className="title"> Comments</h3>
                <p>
                  No comments have been posted yet. Please feel free to comment
                  first!
                </p>
              </div>
              <div className="col-4">
                <h3 className="title">Leave a comment</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-4">
                    <label htmlFor="inputEmail4">Your Comment</label>
                    <textarea
                      className="form-control mt-1"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder=""
                    />
                    {messageError && (
                      <span className="responseSpan error">{messageError}</span>
                    )}
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="inputEmail4">Your Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm  mt-1"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=""
                    />
                    {nameError && (
                      <span className="responseSpan error">{nameError}</span>
                    )}
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="inputEmail4">Your Email</label>
                    <input
                      type="email"
                      className="form-control form-control-sm mt-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=""
                    />
                    {emailError && (
                      <span
                        className="responseSpan error"
                        style={{ color: "red" }}
                      >
                        {emailError}
                      </span>
                    )}
                  </div>
                  <div className="btn-line">
                    <button
                      className="btn btn-primary btn-sm width-100 "
                      type="submit"
                    >
                      {loading && loading ? "Posting" : "Submit"}
                    </button>
                  </div>
                  {response && (
                    <span className="responseSpan">
                      {" "}
                      {JSON.stringify(response.message)}
                    </span>
                  )}
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BlogSinglePage;
