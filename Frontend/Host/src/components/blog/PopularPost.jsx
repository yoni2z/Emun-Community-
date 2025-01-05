import React from 'react';
import PostCardMinimal from './PostCardMinimal';

function PopularPost({ posts }) {
  return (
    <div className="w-full mx-auto bg-white pt-[25px] pb-[10px] font-poppins">
      <h1 className="text-xl font-semibold text-gray-800 mb-5 pl-[3vw]">Popular Posts</h1>

      <div className="space-y-[20px]">
        {posts.slice(0, 6).map((post, index) => (
          <PostCardMinimal 
            key={index} 
            image={post.image} 
            description={post.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default PopularPost;
