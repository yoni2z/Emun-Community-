import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const CausesCard = ({
  causesImage,
  Title,
  Description,
  detailView = false,
  extraFields = {},
}) => {
  return (
    <div className="flex flex-col bg-white items-center shadow-md rounded-md w-fit overflow-hidden font-poppins hover:shadow-2xl ">
      <img
        src={causesImage}
        alt="volunteer Image"
        className="w-full bg-cover h-auto hover:scale-105 duration-500"
      />
      {/* Title and Description */}
      <div className="flex flex-col items-start text-left pt-6 pr-10 pb-6 pl-12">
        {detailView && <h1 className="text-primary text-base">Causes</h1>}
        <h1
          className={`font-bold text-2xl  ${
            detailView ? "hover:text-black" : "hover:text-primary"
          } mb-6 mt-2`}
        >
          {Title}
        </h1>
        {detailView && (
          <div className="mb-5">
            {extraFields && (
              <div className="flex flex-row flex-wrap">
                <p className="text-secondary pr-3">
                  {extraFields.author}
                </p>
                <p className="text-secondary pr-3">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {extraFields.date}
                </p>
                <p className="text-secondary pr-3">
                  <FontAwesomeIcon icon={faEye} className="mr-2" />
                  Hits: 3080
                </p>
                <p className="text-secondary pr-3 flex items-center gap-2">
                  Share: <FaFacebookF className="w-4 h-4 hover:text-primary" />
                  <FaXTwitter className="w-4 h-4 hover:text-primary" />
                  <FaInstagram className="w-4 h-4 hover:text-primary" />
                </p>
              </div>
            )}
          </div>
        )}
        <h4 className="text-secondary mb-3">{Description}</h4>
        {/* Continue Reading Link */}
        {!detailView && (
          <a
            href="#"
            className="text-primary hover:text-black text-left mt-5 mb-3"
          >
            Continue Reading
          </a>
        )}
        {/* Additional Content for Detailed View */}
        {detailView && (
          <div className="mt-12 flex justify-between w-full">
            {extraFields.buttons?.map((button, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md mr-2 ${button.style}`}
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CausesCard;
