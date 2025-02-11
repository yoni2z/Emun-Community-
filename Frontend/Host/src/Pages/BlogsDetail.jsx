import React, { useState, useEffect } from "react";
import TitleBanner from "../components/blog/TitleBanner";
import BlogsCard from "../components/blog/BlogsCard";
import { useParams, useNavigate } from "react-router-dom";
import BlogRight from "../components/blog/BlogRightColumn";
import BlogsBg from "../assets/blogs-title-bg.jpeg";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blogs/")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log("error fetching blogs ", error));
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.log("error fetching the blog datas ", error));
  }, [id]);

  if (!blogData) {
    return <div>blog not found</div>;
  }

  const handlePrev = () => {
    const prevId = parseInt(id) - 1;
    if (prevId >= 1) {
      navigate(`/blogs/${prevId}`);
    }
  };

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= Object.keys(blogs).length) {
      navigate(`/blogs/${nextId}`);
    }
  };

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="BLOGS" backgroundImage={BlogsBg} />
      <div className="py-[95px] sm:mx-10 mx-3 grid grid-cols-3 gap-2">
        <div className="col-span-3 sm:col-span-2 flex flex-col items-center">
          <BlogsCard
            blogsImage={blogData.image}
            Title={blogData.title}
            Description={blogData.description}
            detailView={true}
            extraFields={{
              author: blogData.creator,
              date: blogData.date,
              buttons: [
                {
                  label: "Prev",
                  style: "bg-button text-white hover:bg-black",
                  onClick: handlePrev,
                },
                {
                  label: "Next",
                  style: "bg-button text-white hover:bg-black",
                  onClick: handleNext,
                },
              ],
            }}
          />
        </div>
        <div className="col-span-3 sm:col-span-1 px-4">
          <BlogRight />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
