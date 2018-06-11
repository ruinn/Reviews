import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  showOnlyEnglishReviews,
  changeSortByTo,
  fetchReviewsOnPage
} from '../../actions/sidebarActions';
import sidebarReducer from '../../reducers/sidebarReducer';
class SidebarFilter extends Component {
  constructor(props) {
    super(props);
  }

  handleLanguageChange(e) {
    const { hostelId, sortBy } = this.props;
    if (e.target.value === 'english') {
      this.props.showOnlyEnglishReviews(true);
    } else {
      this.props.showOnlyEnglishReviews(false);
    }
    this.props.fetchReviewsOnPage(
      1,
      hostelId,
      sortBy,
      e.target.value === 'english'
    );
  }

  handleSortByChange(e) {
    const { hostelId, isEnglish } = this.props;
    this.props.changeSortByTo(e.target.value);
    this.props.fetchReviewsOnPage(1, hostelId, e.target.value, isEnglish);
  }

  render() {
    console.log('this.props.sortBy', this.props.sortBy);
    return (
      <div>
        {/* Language filter */}
        <div>
          <p>SHOW:</p>
          <select
            name="show"
            id="show"
            onChange={e => this.handleLanguageChange(e)}
          >
            <option value="english">English Reviews</option>
            <option value="allLanguages">All languages</option>
          </select>
        </div>

        {/* Sort-by fiter */}
        <div>
          <p>SORT BY:</p>
          <select
            name="sortBy"
            id="sortBy"
            value={this.props.sortBy}
            onChange={e => this.handleSortByChange(e)}
          >
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

const mapStateToProps = ({ sidebarReducer, overviewReviews }) => ({
  sortBy: sidebarReducer.sortBy,
  isEnglish: sidebarReducer.isEnglish,
  hostelId: overviewReviews._id
});
export default connect(
  mapStateToProps,
  { showOnlyEnglishReviews, changeSortByTo, fetchReviewsOnPage }
)(SidebarFilter);
