import React from 'react';
import RankedRating from '../ReviewsAndRating/RankedRating';
import RatingSummary from '../ReviewsAndRating/RatingSummary';

const SidebarRankedRating = () => [
  <RatingSummary key="ratingSummary" />,
  <RankedRating key="rankedRating" />,
];

export default SidebarRankedRating;
