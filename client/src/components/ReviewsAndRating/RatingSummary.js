import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RatingSummary = ({ avgRating, totalReviewCount }) => (
  <div>
    <div>Average rating: {avgRating}</div>
    <div>Based on: {totalReviewCount}</div>
  </div>
);

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    avgRating: state.overviewReviews.avgRating,
    totalReviewCount: state.overviewReviews.totalReviewCount,
  };
};

RatingSummary.propTypes = {
  avgRating: PropTypes.number.isRequired,
  totalReviewCount: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  {},
)(RatingSummary);
