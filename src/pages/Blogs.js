import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "../assets/start.png";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
      .then((response) => {
        setPosts(response.data);
        setTotalPages(Math.ceil(response.headers["x-total-count"] / 10)); // assuming 10 posts per page
      })
      .catch((error) => console.log(error));
  }, [currentPage]);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
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
          {/* <div className="row">
            {posts.map((item) => (
              <div className="col-12 col-md-4 col-xl-3" key={item.id}>
                <div className="tile">
                  <Link to={`/blog/${item.id}`} className="">
                    <div className="postPhoto">
                      <img src={Image} alt={"text"} />
                    </div>
                    <div className="postInfo">
                      <h3>{item.title}</h3>

                      <div className="blogMeta pml-3">
                        <span>{item.userId}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            <div className="pagination">
              <button
                className="page-btn left"
                disabled={currentPage === 1}
                onClick={prevPage}
              >
                <span className="arrow left"></span>
              </button>
              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="page-btn right"
                disabled={currentPage === totalPages}
                onClick={nextPage}
              >
               <span className="arrow right"></span>
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Blogs;
