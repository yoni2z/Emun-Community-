import React from "react";
import TitleBanner from "../components/TitleBanner";
import CauseTitleBg from "../assets/cause-title-bg.jpg";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {

    return (
      <div className="font-poppins bg-[#F3F5F7]">
        <TitleBanner title="Contacts" backgroundImage={CauseTitleBg} />
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side: Contact Info */}
            <div className="p-8">
              <h1 className="text-3xl font-bold font-poppins mb-5">
                Contact <span className="text-[#834098]">Info</span>
              </h1>
              <p className="text-gray-500 mb-6">
                Feel free to reach out to us through the following contact
                details or leave your feedback in the form.
              </p>
              <div className="space-y-8">
                {/* Email Section */}
                <div className="flex items-start">
                  <FaEnvelope className="text-[#834098] text-xl mt-1" />
                  <div className="ml-4">
                    <span className="text-lg font-semibold text-gray-800">
                      Email
                    </span>
                    <p className="text-gray-500">email@example.com</p>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex items-start">
                  <FaPhoneAlt className="text-[#834098] text-xl mt-1" />
                  <div className="ml-4">
                    <span className="text-lg font-semibold text-gray-800">
                      Phone
                    </span>
                    <p className="text-gray-500">+123 456 789</p>
                  </div>
                </div>

                {/* Address Section */}
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#834098] text-xl mt-1" />
                  <div className="ml-4">
                    <span className="text-lg font-semibold text-gray-800">
                      Address
                    </span>
                    <p className="text-gray-500">
                      123 Main Street, City, Country
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Feedback Form */}
            <div className="p-8">
              <h1 className="text-3xl font-bold font-poppins mb-5">
                Send Us Your <span className="text-[#834098]">Feedback</span>
              </h1>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834098]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834098]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834098]"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834098] h-32"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#834098] text-white py-3 rounded-lg hover:bg-[#009ae6] transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contacts;