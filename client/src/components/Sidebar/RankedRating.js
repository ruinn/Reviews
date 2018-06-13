import React from 'react';
import RankedRating from '../ReviewsAndRating/RankedRating';
import RatingSummary from '../ReviewsAndRating/RatingSummary';

const SidebarRankedRating = () => [
  <RatingSummary key="ratingSummary" sidebar={true}/>,
  <RankedRating key="rankedRating" sidebar={true}/>,
];

export default SidebarRankedRating;
