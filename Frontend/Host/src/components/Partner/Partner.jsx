import React, { useState, useEffect } from "react";
import image1 from "../../assets/Partners/1.png";
import image2 from "../../assets/Partners/2.png";
import image3 from "../../assets/Partners/3.png";
import image4 from "../../assets/Partners/4.png";
import "./styles.css";

export const Partner = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("https://axonstroke.org/api/clients/")
      .then((response) => response.json())
      .then((data) => setPartners(data))
      .catch((error) => console.error("error fetching clients", error));
  }, []);

  return (
    <div className="partners">
      <div className="partners-image">
        {partners.map((partner, index) => (
          <a key={index} href={partner.link || "#"}>
            <img src={partner.logo} alt={partner.name || "Partner"} />
          </a>
        ))}
      </div>
    </div>
  );
};
