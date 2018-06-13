import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { getRatingLabel, getAgeGroup} from '../../utils/helpers';

const Top4Reviews = ({ reviews }) => {
  return (
    <div className="row">
      {reviews.map(({ _id, rate, text, created_at, user }) => (
        <div key={_id} className="col-md-3">
          <div className="row">
            <div className="col-md-2">
              <span className="btn btn-hostelworld btn-sm">{rate}</span>
            </div>
            <div className="col-md-4 ratingColumn">
              <span className="ratingLabel">{getRatingLabel(rate)}</span>
            </div>
            <div className="col-md-6">
              {' '}
              <i className="fa fa-calendar" aria-hidden="true" />{' '}
              {Moment(created_at).format('DD MMM YYYY')}
            </div>
          </div>
          <div>{text}</div>

          <div className="row">
            <div className="col border-top-gray">
              {user.country}, {user.status}, {getAgeGroup(user.age)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  reviews: state.overviewReviews.reviews ? state.overviewReviews.reviews : []
});

Top4Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      rate: PropTypes.number,
      text: PropTypes.string,
      created_at: PropTypes.string
    })
  ).isRequired
};

export default connect(
  mapStateToProps,
  {}
)(Top4Reviews);
