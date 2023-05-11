import { Link } from "react-router-dom";
import "./CountriesList.css";

function CountriesList({ countries }) {
  // Take countries as a prop
  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country) => (
          <Link
            // Create a Link component for each country
            key={country.alpha3Code} // Use alpha3Code as key
            to={`/${country.alpha3Code}`} // Use alpha3Code as path
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} // Use alpha2Code as flag image
              alt={country.name.common}
            />
            {/* Use common name as link text */}
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
