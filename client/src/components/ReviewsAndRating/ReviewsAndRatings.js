import React from 'react';
import RatingSummary from './RatingSummary';
import RankedRating from './RankedRating';

const ReviewsAndRatings = () => (
  <div id="reviewsAndRatings" className="container">
    <div className="header">Review and Ratings</div>
    <RatingSummary key="ratingSummary" />
    <RankedRating key="rankedRating" />
  </div>
);

export default ReviewsAndRatings;
