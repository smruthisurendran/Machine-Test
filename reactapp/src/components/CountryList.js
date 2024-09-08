import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from "../utils/countrySlice";
import "../styles/CountryList.css";

const CountryList = ({selectedContinent}) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);
  const status = useSelector((state) => state.countries.status);
  const [count, setCount] = useState(1);
  const initialSize = 12;

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const loadBtnClk = () => {
    setCount((prevState)=> prevState+1);
  }

  const filteredCountries = countries?.filter((country)=>{
    if(selectedContinent === "All") return true;
    return country.region === selectedContinent;
  });

  const bodyData = () => {
    const size = initialSize * count;
    return filteredCountries?.filter((data,index)=>  index < size);
  }

  return (
    <div>
      <div className="country-list-container">
        {bodyData().map((country) => (
          <div key={country.name} className="country-card">
            <img src={country.flag} alt={country.name} className="country-flag" />
            <div className="country-card-body">
              <h3 className="country-name">{country.name}</h3>
              <p className="country-region">{country.region}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="load-more-container">
        <button className="load-more-btn" onClick={loadBtnClk}>Load More</button>
      </div>
    </div>
  );
};

export default CountryList;

