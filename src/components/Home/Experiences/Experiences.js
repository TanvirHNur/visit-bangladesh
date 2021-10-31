import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Experiences.css';

const Experiences = () => {
    return (
        <div>
            <div className="container pt-4">
            <h1 className="text-center fw-bold heading-text fs-1">Live unforgettable experiences</h1>
            <h5 className="text-center">With its unique cuisine, rich culture, some of the most beautiful beaches in the world, breathtaking waterfalls, and adventure for everyone’s liking, all you have to do is choose the perfect type of tourism for you and be amazed by the wonders of Bangladesh.</h5>
            </div>
            <Row className="m-3 g-4 mt-5">
                <div className="col-md-6 experience d-flex">
                <h2 className="text-light mb-4">Nature and Outdoor Activities</h2>
                <Link to="/" className="cencel-btn btn mb-3 ms-3">Read more</Link>
                </div>
                <div className="col-md-6 experience1 d-flex ms-">
                <h2 className="text-light mb-4">Culture</h2>
                <Link to="/" className="cencel-btn btn mb-3 ms-3">Read more</Link>
                </div>
                <div className="col-md-6 experience2 d-flex">
                <h2 className="text-light mb-4">Gastronomy</h2>
                <Link to="/" className="cencel-btn btn mb-3 ms-3">Read more</Link>
                </div>
                <div className="col-md-6 experience3 d-flex">
                <h2 className="text-light mb-4">Sun and beach</h2>
                <Link to="/" className="cencel-btn btn mb-3 ms-3">Read more</Link>
                </div>
            </Row>
        </div>
    );
};

export default Experiences;