import React from 'react';
import "../styles/Filters.css";

const Filters = ({ selectedContinent, setSelectedContinent }) => {
  const continents = ['All', 'Asia', 'Europe'];

  return (
    <div className="filters-container">
      {continents.map((continent) => (
        <nav className="continent-filters">
        <a
          key={continent}
          className={`filter-btn ${selectedContinent === continent ? 'active' : ''}`}
          onClick={() => setSelectedContinent(continent)}
        >
          {continent}
        </a>    
        </nav>  
      ))}
    </div>
  );
};

export default Filters;
