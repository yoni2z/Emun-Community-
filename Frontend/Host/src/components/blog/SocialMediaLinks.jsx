import React from 'react';
import { FaFacebook, FaTwitter,FaInstagram, FaPinterest, FaLinkedin, FaTumblr } from 'react-icons/fa';

function SocialMediaLinks() {
  return (
    <div className="w-full bg-white pl-[30px] pr-[15px] pt-[25px] pb-[10px] flex text-4xl">
          <a
            href="#"
            target="_blank"
            className="w-[20%] mr-[10%] mb-[10%] text-secondary hover:text-primary"
          >
            <FaFacebook className="" />
          </a>
          <a
            href="#"
            target="_blank"
            className="w-[20%] mr-[10%] mb-[10%] text-secondary hover:text-primary"
          >
            <FaTwitter className="" />
          </a>
          <a
            href="#"
            target="_blank"
            className="w-[20%] mr-[10%] mb-[10%] text-secondary hover:text-primary"
          >
            <FaInstagram className="" />
          </a>
          <a
            href="#"
            target="_blank"
            className="w-[20%] mr-[10%] mb-[10%] text-secondary hover:text-primary"
          >
            <FaLinkedin className="" />
          </a>
        </div>
  );
}

export default SocialMediaLinks;
