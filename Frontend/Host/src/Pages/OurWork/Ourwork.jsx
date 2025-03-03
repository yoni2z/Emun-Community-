import React, { useEffect, useState } from "react";
import TitleBanner from "../../components/TitleBanner";
import AboutBg from "../../assets/all-bg.jpg";

const OurWorkPage = () => {
  const [volunteers, setVolunteers] = useState([]);

  // Fetch volunteers from the API
  useEffect(() => {
    fetch("http://emuncommunity.org/api/gallery/")
      .then((response) => response.json())
      .then((data) => setVolunteers(data))
      .catch((error) => console.error("Error fetching volunteers:", error));
  }, []);

  return (
    <div className="font-poppins">
      <TitleBanner title="OUR WORK" backgroundImage={AboutBg} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-4xl font-bold font-Raleway mb-5">
            Youth <span className="text-primary">Empowerment</span>
          </h1>
          {/* <p className="text-secondary font-Quicksand max-w-[80%] mx-auto">
            Join our team and get involved! Use your creativity and passion to
            take an active role by fundraising, donating or volunteering.
          </p> */}
        </div>

        {/* Render Volunteer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mx-auto">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={volunteer.image}
                alt={volunteer.title}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;
