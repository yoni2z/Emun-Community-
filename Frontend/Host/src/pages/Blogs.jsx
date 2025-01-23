import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TitleBanner from "../components/blog/TitleBanner";
import BlogsCard from "../components/blog/BlogsCard";
import BlogsBg from "../assets/all-bg.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faLongArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import BlogRight from "../components/blog/BlogRightColumn";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blogs/")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log("error fetching causes ", error));
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="Blog" backgroundImage={BlogsBg} />
      <div className="py-[95px] sm:mx-10 mx-3 grid grid-cols-3 gap-2">
        <div className="col-span-3 sm:col-span-2">
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 mx-auto">
            {currentItems.map((blog, index) => (
              <NavLink
                to={`/blogs/${blog.id}`}
                key={blog.id}
                className={`${index === 0 ? "col-span-2" : ""}`}
              >
                <BlogsCard
                  blogsImage={blog.image}
                  Title={blog.title}
                  Description={blog.description}
                />
              </NavLink>
            ))}
          </div>
          <div className="bg-white mt-8 mb-5 py-6 px-12 flex items-center rounded-md">
            <div className="flex flex-row items-center justify-between w-full">
              {/* Previous Button */}
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`text-secondary hover:text-primary ${
                  currentPage === 1 && "opacity-50 cursor-not-allowed"
                }`}
              >
                <FontAwesomeIcon icon={faLongArrowLeft} />
              </button>

              {/* Page Numbers */}
              <div className="flex flex-row items-center justify-center gap-1 mx-auto">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-8 h-8 ${
                      currentPage === index + 1
                        ? "bg-button text-white rounded-full"
                        : "text-black hover:text-white hover:bg-button hover:rounded-full"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`text-secondary hover:text-primary ${
                  currentPage === totalPages && "opacity-50 cursor-not-allowed"
                }`}
              >
                <FontAwesomeIcon icon={faLongArrowRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-3 sm:col-span-1 px-4">
          <BlogRight />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
