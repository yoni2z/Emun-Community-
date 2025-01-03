import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Categories from './Categories'
import PopularPost from './PopularPost'
import InstaFeedBlog from './InstaFeedBlog';
import SocialMediaLinks from './SocialMediaLinks';

function BlogRight() {

  const [popularPostsData, setPopularPostData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blogs/")
      .then((response) => response.json())
      .then((data) => {
        const randomBlogs = getRandomBlogs(data, 4);
        setPopularPostData(randomBlogs);
      })
      .catch((error) => console.log("error fetching random blogs ", error));
  }, [])

  const getRandomBlogs = (popularPostsData, count) => {
    const randomBlogs = [...popularPostsData].sort(() => Math.random() - 0.5);
    return randomBlogs.slice(0, count);
  }

  return (
    <div className='space-y-[30px]'>
        <SearchBar />
        <Categories />
        <PopularPost posts={popularPostsData} />
        <InstaFeedBlog />
        <SocialMediaLinks />
    </div>
  )
}

export default BlogRight