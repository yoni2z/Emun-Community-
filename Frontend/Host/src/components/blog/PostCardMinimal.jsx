import React from 'react'

function PostCardMinimal({image, description}) {
  return (
    <div className='flex flex-col px-[30px] pt-[10px] pb-[25px] space-y-4'>
        <img
            src={image}
            alt="CardImage"
            className="w-full bg-cover "
        />

        <a href="#" className="">
            <span className='text-black hover:text-primary transition-colors ease-in-out'>
                {description}
            </span>
        </a>

    </div>
  )
}

export default PostCardMinimal