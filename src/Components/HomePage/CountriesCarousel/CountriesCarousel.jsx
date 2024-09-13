import React from "react";
import AttestationCountries from "./AttestationCountries";
import ApostilleCountries from "./ApostilleCountries";
import "./CountriesCarousel.css"
const CountriesCarousel = () => {
  return (
    <div className="countriesCarousel">
      <AttestationCountries />
      <ApostilleCountries />
    </div>
  );
};

export default CountriesCarousel;
