import { useState } from "react";
import "./App.css";
import countriesJson from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState(countriesJson);

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
