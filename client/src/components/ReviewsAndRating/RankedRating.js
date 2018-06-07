import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RankedRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankedFeatures: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rankedFeatures: nextProps.rankedFeatures });
  }

  render() {
    const { rankedFeatures } = this.state;
    return rankedFeatures.map(each => (
      <div key={each._id}>
        <div>{each.feature}</div>
        <div>{each.rating}</div>
        <br />
      </div>
    ));
  }
}

RankedRating.propTypes = {
  rankedFeatures: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = state => ({
  rankedFeatures: state.rankedFeatures,
});

export default connect(
  mapStateToProps,
  {},
)(RankedRating);
