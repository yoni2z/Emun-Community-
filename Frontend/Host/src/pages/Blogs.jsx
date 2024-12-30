import React from 'react'
import TitleBanner from '../components/blogs/TitleBanner'
const backgroundImage = "https://images.pexels.com/photos/9968379/pexels-photo-9968379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function blogs() {
  return ( 
    <div>
      <TitleBanner 
      title={'Blog'}
      backgroundImage={backgroundImage}/>    </div>
  )
}

export default blogs