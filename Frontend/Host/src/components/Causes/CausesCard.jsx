const CausesCard = ({ causesImage, Title, Description }) => {
  return (
    <div className="flex flex-col bg-white items-center shadow-md rounded-md w-fit overflow-hidden font-poppins hover:shadow-2xl ">
      <img
        src={causesImage}
        alt="volunteer Image"
        className="w-full bg-cover h-auto hover:scale-105 duration-500"
      />
      {/*Title and Description*/}
      <div className="flex flex-col items-start text-left pt-6 pr-10 pb-6 pl-12">
        <h1 className="font-bold text-2xl hover:text-primary mb-6">{Title}</h1>
        <h4 className="text-secondary mb-3">{Description}</h4>
        <a
          href="#"
          className="text-primary hover:text-black text-left mt-5 mb-3"
        >
          Continue Reading
        </a>
      </div>
    </div>
  );
};

export default CausesCard;
