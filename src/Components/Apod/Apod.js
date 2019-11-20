import React, { useState, useEffect } from "react";
import axios from "axios";
import './Apod.css';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Date from '../Date/Date';

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
      <Title apodTitle={apod.title} />
      <div className="img-container">
        <img src={apod.url} />
      </div>
      <Description apodDescription={apod.explanation} />
      <Date apodDate={apod.date} />
    </div>
  );
}

export default Apod;