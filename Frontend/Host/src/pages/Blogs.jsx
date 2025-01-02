import React from 'react'
import TitleBanner from '../components/blog/TitleBanner'
import BlogRight from '../components/blog/BlogRightColumn';
import BlogPosts from '../components/blog/BlogPosts';

const backgroundImage = "https://images.pexels.com/photos/9968379/pexels-photo-9968379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const blogPosts = [
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-08_medium.jpg',
    category: 'Hope',
    postTitle: 'First Full-Width Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-09_medium.jpg',
    category: 'Hope',
    postTitle: 'Second Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-07_medium.jpg',
    category: 'Hope',
    postTitle: 'Third Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-06_medium.jpg',
    category: 'Hope',
    postTitle: 'Fourth Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-06_medium.jpg',
    category: 'Hope',
    postTitle: 'Fourth Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-06_medium.jpg',
    category: 'Hope',
    postTitle: 'Fourth Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-06_medium.jpg',
    category: 'Hope',
    postTitle: 'Fourth Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-06_medium.jpg',
    category: 'Hope',
    postTitle: 'Fourth Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-06_medium.jpg',
    category: 'Hope',
    postTitle: 'Fourth Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    postImage: 'https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-06_medium.jpg',
    category: 'Hope',
    postTitle: 'Fourth Post Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  
];

function blogs() {
  return ( 
    <div className='bg-[#f3f5f7]'>

      <TitleBanner 
      title={'Blog'}
      backgroundImage={backgroundImage}/>

      <div className='w-full grid grid-cols-3 gap-[2vw] py-[7%] px-[5%]'>
        <div className='col-span-2'>
          <BlogPosts posts = {blogPosts} />

        </div>

        <div className='col-span-1'>
          <BlogRight />
        </div>

      </div>
    </div>
  )
}

export default blogs