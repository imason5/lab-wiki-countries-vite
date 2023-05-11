import { useState, useEffect } from "react";
import "./App.css";
// import countriesJson from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [countries, setCountries] = useState(countriesJson); // Initialize countries state with countriesJson. Comment in for Json use

  const [countries, setCountries] = useState([]); // Initialize countries state with empty array, now fetch countries from API. Comment out for Json use

  // Fetch countries from API - comment out for Json use
  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((data) => {
        // Sort countries alphabetically by common name
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;
