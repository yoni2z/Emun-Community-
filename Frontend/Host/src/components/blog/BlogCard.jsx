import React from "react";

const BlogCard = ({ postImage, category, postTitle, description }) => {
    return (
      <div className="flex flex-col bg-white rounded-md w-full overflow-hidden font-poppins mb-[5%]">
        <img
          src={postImage}
          alt="volunteer Image"
          className="w-full bg-cover h-auto hover:scale-105 duration-500"
        />
        {/*Title and Description*/}
        <div className="flex flex-col items-start text-left px-[5%] pb-[15px]">
          <a
              href="#"
              className="text-primary hover:text-black text-left mt-5 mb-3 text-sm"
            >
              {category}
          </a>
          <h1 className="font-bold text-xl hover:text-primary mb-6">{postTitle}</h1>
          <h4 className="text-secondary mb-3">{description}</h4>
          <a
            href="#"
            className="text-primary hover:text-black text-left mt-5 mb-3"
          >
            Continue Reading
          </a>
        </div>
      </div>
    );
  };
  
  export default BlogCard;