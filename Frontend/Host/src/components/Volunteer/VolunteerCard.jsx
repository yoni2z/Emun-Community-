import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const VolunteerCard = ({ volunteerImage, Name, Role }) => {
  return (
    <div className="flex flex-col items-center shadow-md rounded-md w-fit overflow-hidden font-poppins hover:shadow-2xl ">
      <img
        //src={volunteerImage}
        src="https://demo.joomshaper.com/2017/hope/images/2017/09/14/volunteer-03.jpg"
        alt="volunteer Image"
        className="w-full bg-cover h-auto "
      />
      {/*Name and Role*/}
      <div className="flex flex-col items-center text-center py-7">
        {/* <h1>{Name}</h1>
        <h4>{Role}</h4> */}
        <h1 className="font-bold text-2xl">Stanley Powers</h1>
        <h4 className="text-secondary mb-[15px]">Support Staff</h4>
        {/*Social Media Links*/}
        <div className="flex flex-row gap-6">
          <a
            href="#"
            target="_blank"
            className="text-secondary hover:text-primary"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a
            href="#"
            target="_blank"
            className="text-secondary hover:text-primary"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            target="_blank"
            className="text-secondary hover:text-primary"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
