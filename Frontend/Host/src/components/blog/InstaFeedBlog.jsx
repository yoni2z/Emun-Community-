import React from 'react'
import InstagramFeed from 'react-instagram-feed';

function InstaFeedBlog() {
  return (
    <div className="w-full mx-auto bg-white pt-[25px] pb-[10px] font-poppins">
      <h1 className="text-xl font-semibold text-gray-800 mb-5 pl-[3vw]">Instagram Feed</h1>

      <InstagramFeed
        accessToken="YOUR_ACCESS_TOKEN"
        limit={6}
        renderItem={({ media_url, permalink }) => (
          <a href={permalink} target="_blank" rel="noopener noreferrer">
            <img src={media_url} alt="Instagram Post" />
          </a>
        )}
      />
        
    </div>
  )
}

export default InstaFeedBlog