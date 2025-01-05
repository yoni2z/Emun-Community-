import React from 'react'
import SearchBar from './SearchBar'
import Categories from './Categories'
import PopularPost from './PopularPost'
import InstaFeedBlog from './InstaFeedBlog';
import SocialMediaLinks from './SocialMediaLinks';

const popularPostsData = [
  { image: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-14_thumbnail.jpg', description: 'Business Cards Does Your Business' },
  { image: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-15_thumbnail.jpg', description: 'Creative Thinking Can Help Your Brand' },
  { image: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-13_thumbnail.jpg', description: 'Does Your Website Need A Redesign?' },
  { image: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-12_thumbnail.jpg', description: 'Top Strategies to Boost Sales' },
  { image: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-11_thumbnail.jpg', description: 'Tips to Optimize Social Media Presence' },
  { image: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-10_thumbnail.jpg', description: 'How to Create Stunning Visuals' },
  { image: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-09_thumbnail.jpg', description: 'Extra Post: Will Not Appear Beyond Limit' },
];

function BlogRight() {

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