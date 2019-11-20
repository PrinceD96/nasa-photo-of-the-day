import React from "react";
import './Title.css';

const Title = ({ apodTitle }) => {
  console.log(apodTitle);
  return (
    <div className="header">
      <h1>{apodTitle}</h1>
    </div>
  );
};

export default Title;