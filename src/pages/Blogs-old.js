import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Image from "../assets/start.png";

function Blogs() {
  const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  


  useEffect(() => {
    axios.get(`http://apparentselves.org/api/blogs?page=${currentPage}`)
    .then((response) => {
      if (response.data.code === 200) {
        setPosts(response.data.data.data);
        setLoading(false);
      }
      else{
        setLoading(false);
      }
    })
    .catch((error) => console.log(error));
  }, [currentPage]);


  // useEffect(() => {
  //   axios
  //     .get(`http://apparentselves.org/api/blogs?page=${currentPage}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       if (response.data.code === 200) {
  //         setPosts(response.data.data.data);

  //         setTotalPages(Math.ceil(response.headers["x-total-count"] / 10));
  //         setLoading(false);
  //       } else {
  //         setLoading(false);
  //       }

  //       // assuming 10 posts per page
  //     })
  //     .catch((error) => console.log(error));
  // }, [currentPage]);

  // const nextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  // console.log(posts);

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // if (!posts || Object.keys(posts).length === 0) {
  //   return <div class="container">
  //     <div className="row">
  //     Loading...
  //     </div>
  //     </div>;
  // }
  return (
    <div>
      <section className="content blogContent">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto  mb-3">
              <h1 className="title">Blog</h1>
              <p>
                CSAS seeks to cultivate understanding of and means for. human
                flourishing that are applicable to a broad range of societal and
                environmental contexts health, education. peace building, caring
                for the biosyjtem, etc. As a research network with global
                participation and a physical presence in Kathmandu, Nepal,
              </p>
            </div>
          </div>
          <div className="row">
            {
            loading ? 
              (
                <div class="container">
                  <div class="row">
                    <div class="col-12 text-center">
                      <div class="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) 
            : 
            (
              <>
                {posts?.length === 0 ? (
                  <>Post not found...</>
                ) : (
                  posts.map((blog) => (
                    <div className="col-12 col-md-4 col-xl-4" key={blog.id}>
                      <div className="tile">
                        <div
                          key={blog.id}
                          onClick={() =>
                            (window.location.href = `/blog/${blog.id}`)
                          }
                        >
                          <div className="postPhoto">
                            <img src={blog.image} alt={"text"} />
                          </div>
                          <div className="postInfo">
                            <h3>{blog.title}</h3>

                            {/* <div className="blogMeta pml-3">
                        <span>{item.userId}</span>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                
                
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
