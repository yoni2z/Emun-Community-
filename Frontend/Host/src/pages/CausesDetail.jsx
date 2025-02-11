import { useState, useEffect } from "react";
import TitleBanner from "../components/TitleBanner";
import CausesCard from "../components/Causes/CausesCard";
import { useParams, useNavigate } from "react-router-dom";
import CauseTitleBg from "../assets/cause-title-bg.jpg";

const Causes = () => {
  const [causes, setCauses] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [causeData, setCauseData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/causes/")
      .then((response) => response.json())
      .then((data) => setCauses(data))
      .catch((error) => console.log("error fetching causes ", error));
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/causes/${id}`)
      .then((response) => response.json())
      .then((data) => setCauseData(data))
      .catch((error) => console.log("error fetching the cause datas ", error));
  }, [id]);

  if (!causeData) {
    return <div>Cause not found</div>;
  }

  const handlePrev = () => {
    const prevId = parseInt(id) - 1;
    if (prevId >= 1) {
      navigate(`/causes/${prevId}`);
    }
  };

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= Object.keys(causes).length) {
      navigate(`/causes/${nextId}`);
    }
  };

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="CAUSES" backgroundImage={CauseTitleBg} />
      <div className="py-[95px] sm:mx-10 mx-3 flex flex-col items-center">
        <CausesCard
          causesImage={causeData.image}
          Title={causeData.title}
          Description={causeData.description}
          detailView={true}
          extraFields={{
            author: causeData.creator,
            date: causeData.date,
            buttons: [
              {
                label: "Prev",
                style: "bg-button text-white hover:bg-black",
                onClick: handlePrev,
              },
              {
                label: "Next",
                style: "bg-button text-white hover:bg-black",
                onClick: handleNext,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Causes;
