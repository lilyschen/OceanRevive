import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="logo">
            <img src={require('./Home icon/centered logo.png')} className="logoimg" />
        </div>
        <div className="container">
            <img src={require('./Home icon/Main Page.jpeg')} className="TS" />
        </div>
        </div>
    );
};

export default Home;