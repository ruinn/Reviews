import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Top5Countries from './Top5Countries';
import TheRestOfCountries from './TheRestOfCountries';

class WhoIsStaying extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ countryCount: nextProps.countryCount });
    }
  }

  render() {
    const renderCountryFlags = (countryCount) => {
      if (countryCount) {
        const sortable = [];
        Object.keys(countryCount).forEach((key) => {
          sortable.push([key, countryCount[key]]);
        });

        sortable.sort((a, b) => b[1] - a[1]);
        return [
          <Top5Countries key="top5countries" countries={sortable.slice(0, 5)} />,
          <TheRestOfCountries key="theRestOfCountries" countries={sortable.slice(5)} />,
        ];
      }
      return null;
    };
    return (
      <div>
        <div>WHOS STAYING</div>
        {renderCountryFlags(this.state.countryCount)}
      </div>
    );
  }
}

WhoIsStaying.propTypes = {
  countryCount: PropTypes.objectOf(PropTypes.number),
};

WhoIsStaying.defaultProps = {
  countryCount: undefined,
};

const mapStateToProps = state => ({
  countryCount: state.overviewReviews.countryCount,
});

export default connect(
  mapStateToProps,
  {},
)(WhoIsStaying);
