import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
        .catch(err => {
            console.log(err)
        })
    } , [])
    console.log(services)
    return (
        <div className="container pt-5">
            <h1 className="text-center heading-text fs-1">Amazing places to visit</h1>
            <h5>Bangladesh has incredible places for you all around the country. Our fantastic destinations are ready for your visit.</h5>
            <Row xs={1} md={3} className="g-5 m-4">
            {
                services?.map( service=> <Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;