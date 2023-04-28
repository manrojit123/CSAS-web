import React, { useState, useEffect } from "react";
import axios from "axios";

function Blogs() {
  const [blogData, setBlogData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://apparentselves.org/api/blogs?page=${currentPage}`)
      .then((response) => {
        if (response.data.code === 200) {
          setBlogData(response.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [currentPage]);
  

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  function Pagination({ currentPage, lastPage, onPageChange, onPreviousPage, onNextPage }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= lastPage; i++) {
      pageNumbers.push(i);
    }
  
    return (
     
      <div className={ lastPage === 1 ? "d-none" : "pagination-container"}>
        <button
          className="pagination-button"
          onClick={onPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => onPageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={onNextPage}
          disabled={currentPage === lastPage}
        >
          Next
        </button>
      </div>
     
    );
  }
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
          {loading ? 
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
            ) : 
            (
              <>
                {blogData?.length === 0 ? (
                  <>Post not found...</>
                ) : (
                  blogData.data.data.map((blog) => (
                    <div className="col-12 col-xl-3 col-md-6" key={blog.id}>
                      <div className="tile">
                        <div
                          key={blog.id}
                          onClick={() => (window.location.href = `/blog/${blog.id}`)}
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
            )
          }
        </div>
      </div>
    </section>  
      
    {blogData && (
      <Pagination
        currentPage={blogData.data.currentPage}
        lastPage={blogData.data.lastPage}
        onPageChange={handlePageChange}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    )}
    </div>
  );
}

export default Blogs;
