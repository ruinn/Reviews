import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOverviewReviews } from './actions/reviewActions';
import WhoIsStaying from './components/WhoIsStaying/WhoIsStaying';
import ReviewsAndRatings from './components/ReviewsAndRating/ReviewsAndRatings';
import LatestReviews from './components/LatestReviews/LatestReviews';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchOverviewReviews('5b1a77d5180c7f989ed68a3b');
  }

  render() {
    return (
      <div>
        <Sidebar />
        <WhoIsStaying />
        <ReviewsAndRatings />
        <LatestReviews />
      </div>
    );s
  }
}

App.propTypes = {
  fetchOverviewReviews: PropTypes.func.isRequired,
};
export default connect(
  null,
  { fetchOverviewReviews },
)(App);
