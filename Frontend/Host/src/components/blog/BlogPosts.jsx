import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

function BlogPosts({ posts }) {
  const POSTS_PER_PAGE = 3; // Number of posts per page
  const [currentPage, setCurrentPage] = useState(1);

  // Scroll to the top of the page when currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Pagination logic
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="font-poppins w-full space-y-6">
      {/* First post (full width) */}
      {currentPosts.length > 0 && (
        <BlogCard
          postImage={currentPosts[0].image}
          category={currentPosts[0].category}
          postTitle={currentPosts[0].title}
          description={currentPosts[0].description}
        />
      )}

      {/* Remaining posts (2-column grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentPosts.slice(1).map((post, index) => (
          <BlogCard
            key={index}
            postImage={post.image}
            category={post.category}
            postTitle={post.title}
            description={post.description}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4 pt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-primary border-primary hover:bg-primary hover:text-white'
          }`}
        >
          &larr; Prev
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === pageIndex + 1
                  ? 'bg-primary text-white'
                  : 'border border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-primary border-primary hover:bg-primary hover:text-white'
          }`}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default BlogPosts;
