import { useState } from "react";
import { NavLink } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import CausesCard from "../components/Causes/CausesCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faLongArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Causes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const causesData = [
    {
      id: 1,
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-01_medium.jpg",
      title: "Many different ways today to find",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
    },
    {
      id: 2,
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-04_medium.jpg",
      title: "Fundraiser for Bella and her friends",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
    },
    {
      id: 3,
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-07_medium.jpg",
      title: "New clothes for highland children",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
    },
    {
      id: 4,
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-02_medium.jpg",
      title: "Keep Teachers in the Classroom",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
    },
    {
      id: 5,
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-05_medium.jpg",
      title: "Supporting Lifeline charity group",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
    },
    {
      id: 6,
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-08_medium.jpg",
      title: "Big charity: build school for poor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
    },
  ];

  const totalPages = Math.ceil(causesData.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = causesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner
        title="Causes"
        backgroundImage="https://demo.joomshaper.com/2017/hope/images/demo/page-title-bg.jpg"
      />
      <div className="py-[95px] sm:mx-10 mx-3">
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 mx-auto">
          {currentItems.map((cause) => (
            <NavLink to={`/causes/${cause.id}`} key={cause.id}>
              <CausesCard
                causesImage={cause.image}
                Title={cause.title}
                Description={cause.description}
              />
            </NavLink>
          ))}
        </div>
        <div className="bg-white mt-8 mb-5 py-6 px-12 flex items-center rounded-md">
          <div className="flex flex-row items-center justify-between w-full">
            {/* Previous Button */}
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`text-secondary hover:text-primary ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
              }`}
            >
              <FontAwesomeIcon icon={faLongArrowLeft} />
            </button>

            {/* Page Numbers */}
            <div className="flex flex-row items-center justify-center gap-1 mx-auto">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-8 h-8 ${
                    currentPage === index + 1
                      ? "bg-primary text-white rounded-full"
                      : "text-black hover:text-white hover:bg-primary hover:rounded-full"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`text-secondary hover:text-primary ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
              }`}
            >
              <FontAwesomeIcon icon={faLongArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
