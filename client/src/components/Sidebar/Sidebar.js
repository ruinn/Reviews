import React from 'react';
import Header from './Header';
import RankedRating from './RankedRating';
import Filter from './Filter';
import Pagination from './Pagination';
import ReviewPage from './ReviewPage';

const Sidebar = () => (
  <div>
    <Header />
    <RankedRating />
    <Filter />
    <ReviewPage />
    <Pagination />
  </div>
);

export default Sidebar;
