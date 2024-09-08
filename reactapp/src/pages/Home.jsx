import React, { useState } from 'react';
import {  Col, Row } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import Slider from '../components/Slider';
import CountryList from '../components/CountryList';
import "../styles/Home.css";
import Filters from "../components/Filters";

const Home = () => {

  const [selectedContinent, setSelectedContinent] = useState("All");

  return (
    <div className="home-page">

      <header className="header">
        <div className="header-title">Countries</div>
        <div className="continent-filter">
        <Filters selectedContinent={selectedContinent} setSelectedContinent={setSelectedContinent} />
      </div>
      </header>

      <section className="welcome-section">
        <div className="line"></div>
        <h1 className="welcome-text">WELCOME</h1>
        <div className="line2"></div>
      </section>

      <div className="slider-container">
        <Slider />
      </div>
      
      <div className="country-list-container">
        <CountryList  selectedContinent={selectedContinent} setSelectedContinent={setSelectedContinent}/>
      </div>
      
      <footer className="row text-center mt-5">
        <div className="col">
        <div className="home-icons">         
            <FaGoogle size={30} className="home-icon" />   
            <FaFacebook size={30} className="home-icon" />     
            <FaLinkedin size={30} className="home-icon" />       
            <FaTwitter size={30} className="home-icon" />    
        </div>
        <h3>Eample@email.com</h3>
          <p>Copyright &copy; 2024 Example. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
