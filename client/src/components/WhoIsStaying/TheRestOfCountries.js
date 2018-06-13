import React from 'react';

const TheRestOfCountries = ({ countries }) => (
  <div>
    <div className="other-country d-flex flex-column justify-content-center">
      <div className="other-country-flag btn">
        <i className="fa fa-flag" aria-hidden="true" />
      </div>
    </div>
    <div className="country-name">Other</div>
    <div className="country-visit">{countries.length} Other nationalities</div>
  </div>
);

export default TheRestOfCountries;
