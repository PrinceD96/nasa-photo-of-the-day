import React, { useState, useEffect } from "react";
import axios from "axios";
import './Apod.css';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Date from '../Date/Date';
import ApodSelector from '../Dropdown/Dropdown';
import { Container, Row, Col, Card, CardImg, CardBody, Button } from 'reactstrap';

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
    // <div>
    //   <Title apodTitle={apod.title} />
    //   <div className="img-container">
    //     <img src={apod.url} />
    //   </div>
    //   <Description apodDescription={apod.explanation} />
    //   <Date apodDate={apod.date} />
    // </div>
    <Container >
      <Row>
        <Col>
          <Card className='Card'>
            <Title apodTitle={apod.title} />
            <CardImg className="card__img" src={apod.url} />
            <CardBody>
              <Description apodDescription={apod.explanation} apodCopyright={apod.copyright} />
              <Date apodDate={apod.date} />
              {/* <Button color="primary">Next APOD</Button> */}
              <ApodSelector></ApodSelector>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Apod;