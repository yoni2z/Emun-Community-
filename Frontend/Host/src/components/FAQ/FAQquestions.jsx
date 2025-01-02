import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const FAQquestions = ({ question, description, className }) => {
  return (
    <div
      className={`py-[55px] pl-[65px] flex flex-row items-baseline ${className}`}
    >
      <div>
        <FontAwesomeIcon
          icon={faAddressBook}
          className="text-primary w-5 h-5 pr-4"
        />
      </div>
      <div className="flex flex-col">
        {/* <h1>{question}</h1>
        <p>{description}</p> */}
        <h1 className="font-bold text-2xl mb-3">
          Are donations tax deductible?
        </h1>
        <p className="text-left text-base text-secondary">
          If you are looking for a new way to promote your non-profit
          organization that won’t cost you more money
        </p>
      </div>
    </div>
  );
};

export default FAQquestions;
