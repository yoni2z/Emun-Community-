import React from 'react';

function SearchBar() {
  return (
    <div className="w-full flex items-center justify-center font-Raleway">
      <input
        type="text"
        placeholder="Search ..."
        className="w-full h-[50px] pl-[20px] text-gray-600 
        focus:outline-none focus:ring-1 focus:ring-gray-200"
      />
      <div className=" bg-white h-[50px] inset-y-0 right-3 flex items-center pointer-events-none px-[5%]">
          <img
            src="/SearchLogo.png"
            alt="Search"
            className=" text-gray-500"
          />
        </div>
    </div>
  );
}

export default SearchBar;
