import React from 'react';
import RatingSummary from './RatingSummary';
import RankedRating from './RankedRating';

const ReviewsAndRatings = () => [
  <div key="header">REVIEW AND RATINGS</div>,
  <RatingSummary key="ratingSummary" />,
  <RankedRating key="rankedRating" />,
];

export default ReviewsAndRatings;
