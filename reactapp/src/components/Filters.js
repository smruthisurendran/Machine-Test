import React from 'react';
import "../styles/Filters.css";

const Filters = ({ selectedContinent, setSelectedContinent }) => {
  const continents = ['All', 'Asia', 'Europe'];

  return (
    <div className="filters-container">
      {continents.map((continent) => (
        <button
          key={continent}
          className={`filter-btn ${selectedContinent === continent ? 'active' : ''}`}
          onClick={() => setSelectedContinent(continent)}
        >
          {continent}
        </button>
      ))}
    </div>
  );
};

export default Filters;
