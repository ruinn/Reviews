import React from 'react';
import Header from './Header';
import RankedRating from './RankedRating';
import Filter from './Filter';
import Pagination from './Pagination';

const Sidebar = () => (
  <div>
    <Header />
    <RankedRating />
    <Filter />
    <Pagination />
  </div>
);

export default Sidebar;
