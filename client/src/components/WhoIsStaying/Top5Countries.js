import React from 'react';
import PropTypes from 'prop-types';

const Top5Countries = ({ countries }, index) => (
  <div key={index}>
    {countries.map(([country, visit]) => (
      <div key={country}>
        NAME: {country}, VISIT: {visit > 5 ? visit - (visit % 5) : 1}+
      </div>
    ))}
  </div>
);

Top5Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.array),
};

Top5Countries.defaultProps = {
  countries: [],
};

export default Top5Countries;
