import React from "react";

const Title = props => {
  console.log(props.date);
  return (
    <div>
      <h1>{props.date}</h1>
    </div>
  );
};

export default Title;