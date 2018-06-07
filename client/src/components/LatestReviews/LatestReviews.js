import React from 'react';
import Top4Reviews from './Top4Reviews';

const LatestReviews = () => [
  <div key="header">Latest Reviews</div>,
  <Top4Reviews key="top4Reviews" />,
  <div key="readAllReviews">
    <button>Read all reviews</button>
  </div>,
];

export default LatestReviews;
