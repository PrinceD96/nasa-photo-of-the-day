import React from "react";
import './Date.css';

const Date = ({ apodDate }) => {
  console.log(apodDate);
  return (
    <div className="date-container">
      <h3>{apodDate}</h3>
    </div>
  );
};

export default Date;