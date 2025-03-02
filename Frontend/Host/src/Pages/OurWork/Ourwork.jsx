import React, { useEffect, useState } from "react";
import VolunteerCard from "../../components/Volunteer/VolunteerCard";
import VolunteerForm from "../../components/Volunteer/VolunteerForm";
import TitleBanner from "../../components/TitleBanner";
import AboutBg from "../../assets/all-bg.jpg";

const OurWorkPage = () => {
  const [volunteers, setVolunteers] = useState([]);

  // Fetch volunteers from the API
  useEffect(() => {
    fetch("http://emuncommunity.org/api/volunteers/")
      .then((response) => response.json())
      .then((data) => setVolunteers(data))
      .catch((error) => console.error("Error fetching volunteers:", error));
  }, []);

  return (
    <div className="font-poppins">
      <TitleBanner title="REGISTER" backgroundImage={AboutBg} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-4xl font-bold font-Raleway mb-5">
            A Team of <span className="text-primary">Volunteers</span>
          </h1>
          <p className="text-secondary font-Quicksand max-w-[80%] mx-auto">
            Join our team and get involved! Use your creativity and passion to
            take an active role by fundraising, donating or volunteering.
          </p>
        </div>

        {/* Render Volunteer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mx-auto">
          {volunteers.map((volunteer) => (
            <VolunteerCard
              key={volunteer.id}
              volunteerImage={volunteer.profile_image}
              Name={volunteer.name}
              Role={volunteer.role}
              facebookUrl={volunteer.facebook_url}
              twitterUrl={volunteer.twitter_url}
              instagramUrl={volunteer.instagram_url}
            />
          ))}
        </div>
      </div>

      {/* Become a Volunteer Section */}
      <div>
        <div className="py-[95px] bg-background">
          <div className="mx-10">
            <div className="mb-[77px] text-center">
              <h1 className="text-4xl font-bold font-Raleway mb-5">
                Become A <span className="text-primary">Volunteer</span>
              </h1>
              <p className="text-secondary font-Quicksand max-w-[80%] mx-auto">
                If you’re looking for the latest in wireless headphones for your
                enjoyment and private listening, whether to TV, stereo, home
                entertainment.
              </p>
            </div>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;
