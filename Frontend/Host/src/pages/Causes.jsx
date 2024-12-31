import { NavLink } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import CausesCard from "../components/Causes/CausesCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

const Causes = () => {
  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner
        title="Causes"
        backgroundImage="https://demo.joomshaper.com/2017/hope/images/demo/page-title-bg.jpg"
      />
      <div className="py-[95px] mx-10">
        <div className="grid grid-cols-3 gap-8 mx-auto">
          <NavLink to="/causes/1">
            <CausesCard
              causesImage="https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-01_medium.jpg"
              Title="Many different ways today to find"
              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore."
            />
          </NavLink>
          <NavLink to="/causes/2">
            <CausesCard
              causesImage="https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-04_medium.jpg"
              Title="Fundraiser for Bella and her friends"
              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore."
            />
          </NavLink>
          <NavLink to="/causes/3">
            <CausesCard
              causesImage="https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-07_medium.jpg"
              Title="New clothes for highland children"
              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore."
            />
          </NavLink>
          <NavLink to="/causes/4">
            <CausesCard
              causesImage="https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-02_medium.jpg"
              Title="Keep Teachers in the Classroom"
              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore."
            />
          </NavLink>
          <NavLink to="/causes/5">
            <CausesCard
              causesImage="https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-05_medium.jpg"
              Title="Supporting Lifeline charity group"
              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore."
            />
          </NavLink>
          <NavLink to="/causes/6">
            <CausesCard
              causesImage="https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-08_medium.jpg"
              Title="Big charity: build school for poor"
              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore."
            />
          </NavLink>
        </div>
        <div className="bg-white mt-8 mb-5 py-6 px-12 flex items-center rounded-md">
          <div className="flex flex-row items-center justify-between w-full">
            {/* Centered Numbers */}
            <div className="flex flex-row items-center justify-center gap-1 mx-auto">
              <button className="text-black hover:text-white hover:bg-primary hover:rounded-full active:text-white active:bg-primary active:rounded-full w-8 h-8">
                1
              </button>
              <button className="text-black hover:text-white hover:bg-primary hover:rounded-full  active:text-white active:bg-primary active:rounded-full w-8 h-8">
                2
              </button>
            </div>

            {/* Right-aligned Icon */}
            <button className="text-secondary hover:text-primary">
              <FontAwesomeIcon icon={faLongArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
