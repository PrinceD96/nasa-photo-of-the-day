import React from "react";
import './Description.css';

const Description = ({ apodDescription }) => {
  console.log(apodDescription);
  return (
    <div className="desc-container">
      <p>{apodDescription}</p>
    </div>
  );
};

export default Description;