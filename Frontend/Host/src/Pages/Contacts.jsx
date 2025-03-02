import React, { useState } from "react";
import { send } from "@emailjs/browser"; // Import the send function from @emailjs/browser
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import TitleBanner from "../components/TitleBanner";
import back from "../assets/all-bg.jpg";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    send(
      "service_dz1ryd9", // EmailJS Service ID
      "template_f8znbrs", // EmailJS Template ID
      formData,
      "5TeEqqzeyRkACPAJF" // EmailJS User ID
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        setIsLoading(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="CONTACT" backgroundImage={back} />
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <div className="p-8">
            <h1 className="text-3xl text-[#834098] font-Raleway mb-5">
              CONTACT <span className="text-[#ffd012]">INFO</span>
            </h1>
            <p className="text-gray-500 mb-6 font-Quicksand">
              Feel free to reach out to us through the following contact details
              or leave your feedback in the form.
            </p>
            <div className="space-y-8">
              <div className="flex items-start">
                <FaEnvelope className="text-[#ffd012] text-xl mt-1" />
                <div className="ml-4">
                  <span className="text-lg font-Raleway text-gray-800">
                    Email
                  </span>
                  <p className="text-gray-500 font-Quicksand">
                    info@axonstroke.org
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className="text-[#ffd012] text-xl mt-1" />
                <div className="ml-4">
                  <span className="text-lg font-Raleway text-gray-800">
                    Phone
                  </span>
                  <p className="text-gray-500 font-Quicksand">
                    +251 974 78 88 88
                  </p>
                  <p className="text-gray-500 font-Quicksand">
                    +251 940 15 56 06
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#ffd012] text-xl mt-1" />
                <div className="ml-4">
                  <span className="text-lg font-Raleway text-gray-800">
                    Address
                  </span>
                  <p className="text-gray-500 font-Quicksand">
                    1st branch: Near American Medical center inside the Sunshine
                    Real-Estate Compound (Meri-Luki)
                  </p>
                  <p className="text-gray-500 font-Quicksand">
                    2nd branch: 500 meters up the road from Wossen Grocery to
                    Kara.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Feedback Form */}
          <div className="p-8">
            <h1 className="text-3xl text-[#834098] font-Raleway mb-5">
              SEND US YOUR <span className="text-[#ffd012]">FEEDBACK</span>
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd012] font-Quicksand"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd012] font-Quicksand"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd012] font-Quicksand"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd012] h-32 font-Quicksand"
                required
              ></textarea>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg transition duration-200 font-Montserrat ${
                  isSent
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-[#ffd012] text-white hover:bg-[#834098]"
                }`}
                disabled={isLoading || isSent}
              >
                {isLoading
                  ? "Sending..."
                  : isSent
                  ? "Message Sent"
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
