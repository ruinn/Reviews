import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RatingSummary = ({ avgRating, totalReviewCount }) => (
  <div>
    <div>Average rating: {avgRating}</div>
    <div>Based on: {totalReviewCount}</div>
  </div>
);

RatingSummary.propTypes = {
  avgRating: PropTypes.number,
  totalReviewCount: PropTypes.number,
};

RatingSummary.defaultProps = {
  avgRating: 0,
  totalReviewCount: 0,
};

const mapStateToProps = ({ overviewReviews }) => ({
  avgRating: overviewReviews.avgRating,
  totalReviewCount: overviewReviews.totalReviewCount,
});

export default connect(
  mapStateToProps,
  {},
)(RatingSummary);
