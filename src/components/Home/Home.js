import React from 'react';
import Experiences from './Experiences/Experiences';
import './Home.css'
import NecessaryInfo from './NecessaryInfo/NecessaryInfo';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <div className="home-bg">
                <div className="home-text">
                <h1 className="text-center text-light">Welcome to Bangladesh</h1>
                <h4 className="text-center text-light">The prime sustainable destination in the Mediterranean, located in the Asia </h4>
                </div>
            </div>
            <Experiences/>
            <Services/>
            <NecessaryInfo></NecessaryInfo>
        </div>
    );
};

export default Home;