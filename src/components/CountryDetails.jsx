import React from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams(); // access the alpha3Code parameter from the URL

  const country = countries.find(
    (country) => country.alpha3Code === alpha3Code
  ); // find the country with the alpha3Code from the URL

  // Find border countries
  const getBorderCountries = () => {
    return country.borders.map((borderCountryAlpha3Code) => {
      const borderCountry = countries.find(
        (country) => country.alpha3Code === borderCountryAlpha3Code // find the country with the alpha3Code from the URL if it matches the border country's alpha3Code
      );

      return (
        <li key={borderCountryAlpha3Code}>
          <Link to={`/${borderCountryAlpha3Code}`}>
            {borderCountry.name.common}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{getBorderCountries()}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
