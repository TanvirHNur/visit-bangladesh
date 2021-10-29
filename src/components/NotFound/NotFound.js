
import './NotFound.css'
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/error_404.jpg'

// not found pages
const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="fs-2 text-center fw-bold">404 - Nothing to see here</h1>
            <p className="text-center">This page isn't available. Sorry about that.</p>
            <p className="text-center">Try searching for something else <Link to="home">Home</Link> .</p>
            <div className="d-flex justify-content-center">
            <img className="not-found-img" src={img} alt="" />
            </div>
            

        </div>
    );
};

export default NotFound;