import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, img, name, des}= service;
    return (
    <div className="service">
              <Col>
                 <Card  className="service-col">
                     <Card.Img className="service-img" variant="top" src={img} />
                    <Card.Body>
                     <Card.Title>{name}</Card.Title>
                     <Card.Text className="service-text">
                         {des}
                     </Card.Text>
                     <Link className="booking-btn fs-5" to={`booking/${_id}`}>Book Online</Link>
                 </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;