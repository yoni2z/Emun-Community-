import TitleBanner from "../components/TitleBanner";
import FAQquestions from "../components/FAQ/FAQquestions";

const FAQ = () => {
  return (
    <div className="font-poppins">
      <TitleBanner
        title="FAQ"
        backgroundImage="https://demo.joomshaper.com/2017/hope/images/demo/page-title-bg.jpg"
      />
      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-4xl font-bold font-poppins mb-5">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-0 mx-auto">
          <FAQquestions className="border-b border-r border-secondary/20" />
          <FAQquestions className="border-b border-secondary/20" />
          <FAQquestions className="border-b border-r border-secondary/20" />
          <FAQquestions className="border-b border-secondary/20" />
          <FAQquestions className="border-r border-secondary/20" />
          <FAQquestions className="p-4" />
        </div>
      </div>

      {/*Become a Volunteer Section*/}
      <div className="relative">
        <div>
          <img
            src="https://demo.joomshaper.com/2017/hope/images/2017/09/13/become-a-volunteer-bg.png"
            alt="World Background Image"
            className="absolute inset-0 w-full h-full object-cover z-1"
          />
        </div>
        <div className="py-[95px] bg-primary">
          <div className="mx-10">
            <div className="mb-[77px] text-center">
              <h1 className="text-6xl font-bold font-poppins mb-5 text-white">
                Become A Volunteer
              </h1>
              <p className="text-white max-w-[80%] mx-auto text-2xl">
                Join us for a better life and beautiful future
              </p>
              <button className="text-black bg-white rounded-md py-5 px-9 font-bold mt-[55px] relative z-10">
                Join Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
