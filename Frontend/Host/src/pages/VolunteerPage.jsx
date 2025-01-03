import VolunteerCard from "../components/Volunteer/VolunteerCard";
import VolunteerForm from "../components/Volunteer/VolunteerForm";
import TitleBanner from "../components/TitleBanner";

const VolunteerPage = () => {
  return (
    <div className="font-poppins">
      <TitleBanner
        title="Volunteer"
        backgroundImage="https://demo.joomshaper.com/2017/hope/images/demo/page-title-bg.jpg"
      />
      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-4xl font-bold font-poppins mb-5">
            A Team of <span className="text-primary">Volunteers</span>
          </h1>
          <p className="text-secondary max-w-[80%] mx-auto">
            Join our team and get involved! Use your creativity and passion to
            take an active role by fundraising, donating or volunteer.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 gap-y-8 mx-auto">
          <VolunteerCard />
          <VolunteerCard />
          <VolunteerCard />
          <VolunteerCard />
          <VolunteerCard />
          <VolunteerCard />
        </div>
      </div>

      {/*Become a Volunteer Section*/}
      <div>
        <div className="py-[95px] bg-background">
          <div className="mx-10">
            <div className="mb-[77px] text-center">
              <h1 className="text-4xl font-bold font-poppins mb-5">
                Become A <span className="text-primary">Volunteer</span>
              </h1>
              <p className="text-secondary max-w-[80%] mx-auto">
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

export default VolunteerPage;
