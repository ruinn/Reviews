import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Top4Reviews = ({ reviews }) =>
  reviews.map(({
    _id, rate, text, created_at,
  }) => (
    <div key={_id}>
      <div>Rate: {rate}</div>
      <div>{text}</div>
      <div>Date: {created_at}</div>
    </div>
  ));

const mapStateToProps = state => ({
  reviews: state.overviewReviews.reviews ? state.overviewReviews.reviews : [],
});

Top4Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    rate: PropTypes.number,
    text: PropTypes.string,
    created_at: PropTypes.string,
  })).isRequired,
};

export default connect(
  mapStateToProps,
  {},
)(Top4Reviews);
