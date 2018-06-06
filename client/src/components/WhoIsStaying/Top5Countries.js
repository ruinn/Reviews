import React from 'react';
import PropTypes from 'prop-types';

const Top5Countries = ({ countries }) => (
  <div>
    {countries.map(([country, visit]) => (
      <div>
        NAME: {country}, VISIT: {visit > 5 ? visit - (visit % 5) : 1}+
      </div>
    ))}
  </div>
);

Top5Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Top5Countries;
