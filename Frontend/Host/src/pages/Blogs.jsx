import React, { useState, useEffect } from "react";
import TitleBanner from "../components/blog/TitleBanner";
import BlogRight from "../components/blog/BlogRightColumn";
import BlogPosts from "../components/blog/BlogPosts";
import BlogsBg from "../assets/blogs-title-bg.jpeg";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blogs/")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log("error fetching blogs ", error));
  }, []);

  return (
    <div className="bg-[#f3f5f7]">
      <TitleBanner title={"Blog"} backgroundImage={BlogsBg} />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-[7%] px-[5%]">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <BlogPosts posts={blogs} />
        </div>

        <div className="col-span-1">
          <BlogRight />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
