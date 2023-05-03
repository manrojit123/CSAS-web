import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import UserImage from "../assets/userimage.png";

function BlogSinglePage(props) {
  const [blog, setBlog] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [emailSubscribe, setEmailSubscriber] =useState();
  const [message, setMessage] = useState("");
  const [blogLoad, setBlogLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formError, setFormError] = useState("");
  // const [comments, setComments] = useState([]);

  const pathname = useParams();
  // console.log(pathname);

  //get details
  useEffect(() => {
    // Fetch blog data from API and update state
    axios
      .get(`http://apparentselves.org/api/blog/${pathname.postId}/detail`)
      .then((response) => {
        if (response.data.code === 200) {
          console.log(response.data);
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

  //submitComment
  // const handleSubmitSubscriber = (event) =>{
  //   axios
  //   .post(`http://apparentselves.org/api/handleSubmitsubscriber-form`, {
  //     email: emailSubscribe,
  //   })
  //   .then((response) => {
  //     setLoading(false);
  //     setResponse(response.data);
  //   })
  //   .catch((error) => {
  //     setLoading(false);
  //     console.error(error);
  //   });
  // };
  
  const handleSubmit = (event, id) => {
    console.log(id);
    event.preventDefault();
    // Clear any existing error messages
    setNameError("");
    setEmailError("");
    setMessageError("");
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    // Validate name, email, and message fields
    if (!name || !email || !message) {
      setFormError("All fields are required");

      if (!name) {
        setNameError("Please enter your name");
      } else {
        setNameError("");
      }
      if (!message) {
        setMessageError("Please enter a message");
      } else {
        setEmailError("");
      }
      if (!email) {
        setEmailError("Please enter your email address");
      } else if (email && !validEmail) {
        setEmailError("Please enter a valid email address");
      } else {
      }

      return;
    } else {
      setFormError("");
    }

    setLoading(true);
    axios
      .post(`http://apparentselves.org/api/blog/${id}/comment`, {
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

  // const shareOnTwitter = (post) => {
  //   const url = encodeURIComponent(window.location.href);
  //   const text = encodeURIComponent(post.title);
  //   window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
  // };

  return (
    <div className="content blogContent  d-flex align-items-center justify-content-center">
      <Helmet>
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="Blog" />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:image" content={blog?.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="apparentselves.org" />
        <meta property="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content={blog?.title} />
        <meta name="twitter:image" content={blog?.image} />
      </Helmet>
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
          {/* <>{blog.id}</> */}
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto">
                <h1 className="title">{blog.title}</h1>
                <span className="text-muted">{blog.date}</span>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid rounded-10 my-4 singlePostImage"
                />
                <div
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                ></div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="share">
                    <button
                      className="btn btn-sm"
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            window.location.href
                          )}&quote=${encodeURIComponent(
                            blog?.title
                          )}&hashtag=blogpost`
                        )
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-sm"
                      onClick={() =>
                        window.open(
                          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            window.location.href
                          )}&text=${encodeURIComponent(
                            blog?.title
                          )}&hashtags=blogpost`
                        )
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </button>
                  </div>
                  {/* <div className="subscriber">
                    <form onSubmit={(event) => handleSubmitSubscriber(event)}> 
                      <div class="input-group mb-0">
                      <input
                        type="email"
                        className="form-control form-control-sm mt-1"
                        value={emailSubscribe}
                        onChange={(e) => setEmailSubscriber(e.target.value)}
                        placeholder=""
                      />
                        <button class="btn btn-primary" type="submit">Subscribe</button>
                      </div>
                    </form>
                  </div> */}
                </div>

                <hr />
              </div>
            </div>
            <div className="row mt-4 pt-4">
              <div className="col-6 offset-1">
                <h3 className="title"> Comments</h3>
                {blog?.comments?.length === 0 ? (
                  <p>
                    No comments have been posted yet. Please feel free to
                    comment first!
                  </p>
                ) : (
                  <div className="wrapper">
                    <div className="comment">
                      {blog?.comments.reverse().map((comment, index) => (
                        <div className="comment_content" key={index}>
                          <div className="avatar">
                            <img src={UserImage} alt="title" />
                          </div>
                          <div className="content-comment">
                            <div className="user">
                              <h5 className="blog-h5">{comment.name}</h5>
                              <span className="is-mute">17 SEP 2020</span>
                            </div>
                            <p>{comment.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="col-4 ">
                <div className="comments-box">
                  <h3 className="title">Leave a comment</h3>
                  <form onSubmit={(event) => handleSubmit(event, `${blog.id}`)}>
                    <div className="form-group mt-4">
                      <label htmlFor="inputEmail4">Your Comment</label>
                      <textarea
                        className="form-control mt-1"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder=""
                      />
                      {messageError && (
                        <span className="responseSpan error">
                          {messageError}
                        </span>
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
                    <div className="btn-line ">
                      <button
                        className="btn btn-primary btn-sm width-100 "
                        type="submit"
                      >
                        {loading && loading ? "Posting" : "Submit"}
                      </button>
                      <span className="error d-block mx-0">{formError}</span>
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
          </div>
        </>
      )}
    </div>
  );
}

export default BlogSinglePage;
