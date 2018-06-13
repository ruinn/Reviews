import React from 'react';
import PropTypes from 'prop-types';
import CountryFlag from './CountryFlag';

// <div key={index} className="row">
// </div>
const Top5Countries = ({ countries }, index) => {
  return countries.map(([country, visit]) => (
    <div key={country}>
      <CountryFlag name={country} />
      <div className="country-name">{country}</div>
      <div className="country-visit">{visit > 5 ? visit - (visit % 5) : 1}+ Guests</div>
    </div>
  ));
};

Top5Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.array)
};

Top5Countries.defaultProps = {
  countries: []
};

export default Top5Countries;
