import React from 'react';
import '../styles/Home.css';
import video from '../Media/Bike.mp4';
import { Link } from 'react-router-dom';
import About from '../pages/About';
import ContactUs from '../pages/Contact';
import Bikes from '../pages/Bikes';


const Home = () => {
  return (
    <div>
    <div className="app">
      <video autoPlay loop muted className="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content" style={{ fontSize: '3em', textAlign: 'right', paddingRight: '20px', paddingTop: '20px' }}>
        <h1>BIKE'S</h1>
        <p>Where the journey begins</p>
        <Link to="/testride" className="btn"><button style={{ backgroundColor: 'white', color: 'black', height:'60px',width:'180px',borderRadius:'20px' }} className="btn">
          Book Testride
        </button></Link>
      </div>
    </div>
    <About />
    <ContactUs />
    <Bikes />
    </div>
  );
};

export default Home;
