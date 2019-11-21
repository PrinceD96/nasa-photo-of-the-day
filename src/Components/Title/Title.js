import React from "react";
import './Title.css';
import { CardHeader } from 'reactstrap';

const Title = ({ apodTitle }) => {
  console.log(apodTitle);
  return (
    // <div className="header">
    //   <h1>{apodTitle}</h1>
    // </div>
    <CardHeader>
      <h1>{apodTitle}</h1>
    </CardHeader>
  );
};

export default Title;