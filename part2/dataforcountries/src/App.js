import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import "./App.css";

const App = () => {
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  console.log(countries);
  let displayCountries = countries.filter((country) =>
    country.name.toUpperCase().includes(newSearch.toUpperCase())
  );
  return (
    <div>
      find countries <input value={newSearch} onChange={handleSearchChange} />
      <div>
        {displayCountries.length > 10
          ? "Too many matches, specify another filter"
          : displayCountries.length > 1
          ? displayCountries.map((country) => {
              return <p key={country.name}>{country.name}</p>;
            })
          : displayCountries.map((country) => (
              <Country country={country} key={country.name} />
            ))}
      </div>
    </div>
  );
};

export default App;
