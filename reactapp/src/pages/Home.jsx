import React, { useState } from 'react';
import Slider from '../components/Slider';
import CountryList from '../components/CountryList';
import "../styles/Home.css";
import Filters from "../components/Filters";

const Home = () => {

  const [selectedContinent, setSelectedContinent] = useState("All");

  return (
    <div className="home-page">
      <h1 className="text-center my-4">WELCOME</h1>
      <div className="slider-container">
        <Slider />
      </div>
      <div className='continent-filter'>
        {/* <button className="active">All</button>
        <button>Asia</button>
        <button>Europe</button> */}
        <Filters selectedContinent={selectedContinent} setSelectedContinent={setSelectedContinent} />
      </div>
      <div className="country-list-container">
        <CountryList  selectedContinent={selectedContinent} setSelectedContinent={setSelectedContinent}/>
      </div>
      <footer className="row text-center mt-5">
        <div className="col">
          <p>&copy; 2024 Example. All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
