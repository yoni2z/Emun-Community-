import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import PopularPost from "./PopularPost";
import InstaFeedBlog from "./InstaFeedBlog";
import SocialMediaLinks from "./SocialMediaLinks";

function BlogRight() {
  const [popularPostsData, setPopularPostsData] = useState([]);

  useEffect(() => {
    fetch("http://emuncommunity.org/api/blogs/")
      .then((response) => response.json())
      .then((data) => setPopularPostsData(data))
      .catch((error) => console.log("error fetching blogs", error));
  }, []);

  return (
    <div className="space-y-[30px]">
      <SearchBar />
      <Categories />
      <PopularPost posts={popularPostsData} />
      <InstaFeedBlog />
      <SocialMediaLinks />
    </div>
  );
}

export default BlogRight;
