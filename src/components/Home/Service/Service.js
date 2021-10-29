import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, img, title, des}= service;
    return (
    <div className="service">
              <Col>
                 <Card  className="service-col">
                     <Card.Img variant="top" src={img} />
                    <Card.Body>
                     <Card.Title>{title}</Card.Title>
                     <Card.Text>
                         {des}
                     </Card.Text>
                     <Link className="learn-more-btn" to={`booking/${id}`}>Learn More</Link>
                 </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;