import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from '../Title/Title';

const Apod = () => {
  const [apod, setApod] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=SSeDp7cq9jOatsThYgsdDJsoDaedgbHKWKImOY5y')
      .then(response => {
        console.log(response.data)
        setApod(response.data)
      })
      .catch(error => { console.log('Something went wrong.', error) })
  }, []);

  return (
    <div>
      <Title />
      <img src={apod.url} />
    </div>
  );
}

export default Apod;