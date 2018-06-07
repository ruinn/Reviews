import React, { Component } from 'react';

class SidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {/* Language filter */}
        <div>
          <p>SHOW:</p>
          <select name="show" id="show">
            <option value="english">English Reviews</option>
            <option value="allLanguages">All languages</option>
          </select>
        </div>

        {/* Sort-by fiter */}
        <div>
          <p>SORT BY:</p>
          <select name="sortBy" id="sortBy">
            <option value="topRated">Top Rated</option>
            <option value="lowestRated">Lowest Rated</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="ageGroup">Age Group</option>
          </select>
        </div>

        <div />
      </div>
    );
  }
}

export default SidebarFilter;
