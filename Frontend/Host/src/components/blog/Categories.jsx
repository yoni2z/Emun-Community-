import React from 'react';

function Categories() {
  return (
    <div className="w-full mx-auto bg-white pt-[25px] pb-[10px] font-poppins">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-800 mb-5 pl-[3vw]">Categories</h1>

      {/* List */}
      <ul className="space-y-2">
        <li className='px-[3vw] py-[1vh] border-b border-gray-300 '>
          <a
            href="#link1"
            className="block py-2 text-gray-700 hover:text-primary transition-colors ease-in-out"
          >
            News & Update
          </a>
        </li>
        <li className='px-[3vw] py-[1vh] border-b border-gray-300 '>
          <a
            href="#link2"
            className="block py-2 text-gray-700 hover:text-primary transition-colors ease-in-out"
          >
            Site of the Month
          </a>
        </li>
        <li className='px-[3vw] py-[1vh] border-b border-gray-300 '>
          <a
            href="#link3"
            className="block py-2 text-gray-700 hover:text-primary transition-colors ease-in-out"
          >
            Tips & Tutorials
          </a>
        </li>
        <li className='px-[3vw] py-[1vh] border-b border-gray-300 '>
          <a
            href="#link4"
            className="block py-2 text-gray-700 hover:text-primary transition-colors ease-in-out"
          >
            Coming Soon
          </a>
        </li>
        <li className='px-[3vw] py-[1vh] border-b border-gray-300 '>
          <a
            href="#link5"
            className="block py-2 text-gray-700 hover:text-primary transition-colors ease-in-out"
          >
            Coming Soon
          </a>
        </li>
        <li className='px-[3vw] py-[1vh] '>
          <a
            href="#link6"
            className="block py-2 text-gray-700 hover:text-primary transition-colors ease-in-out"
          >
            Coming Soon
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Categories;