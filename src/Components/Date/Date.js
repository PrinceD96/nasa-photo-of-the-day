import React from "react";
import './Date.css';

const Date = ({ apodDate }) => {
  console.log(apodDate);
  return (
    <div className="date-container">
      <h6>{apodDate}</h6>
    </div>
  );
};

export default Date;