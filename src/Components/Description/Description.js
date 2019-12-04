import React from "react";
import './Description.css';

const Description = ({ apodDescription, apodCopyright }) => {
  console.log(apodDescription);
  return (
    <div className="desc-container">
      <p>{apodDescription}</p>
      <h6>{apodCopyright}</h6>
    </div>
  );
};

export default Description;