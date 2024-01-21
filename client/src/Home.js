import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <h1>Ocean Revive</h1>
            <h3>Past Success!</h3>
            <img src={require('./Home icon/main.jpeg')} className="TS" />
        </div>
    );
};

export default Home;