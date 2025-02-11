import React from "react";
import "./styles.css";

export const Trademark = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="trademark">
      <p>Copyright © Emun Community {currentYear}. All Rights Reserved</p>
    </div>
  );
};
