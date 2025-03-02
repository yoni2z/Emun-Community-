import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const VolunteerCard = ({
  volunteerImage,
  Name,
  Role,
  facebookUrl,
  twitterUrl,
  instagramUrl,
}) => {
  return (
    <div className="flex flex-col items-center shadow-md rounded-md w-fit overflow-hidden hover:shadow-2xl ">
      <img
        src={volunteerImage}
        alt={`${Name}'s Image`}
        className="w-full bg-cover h-auto"
      />
      {/* Name and Role */}
      <div className="flex flex-col items-center text-center py-7">
        <h1 className="font-bold font-Raleway text-2xl">{Name}</h1>
        <h4 className="text-secondary font-Quicksand mb-[15px]">{Role}</h4>
        {/* Social Media Links */}
        <div className="flex flex-row gap-6">
          {facebookUrl && (
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
          )}
          {twitterUrl && (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
