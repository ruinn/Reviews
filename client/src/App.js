import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOverviewReviews } from './actions/reviewActions';
import WhoIsStaying from './components/WhoIsStaying/WhoIsStaying';
import ReviewsAndRatings from './components/ReviewsAndRating/ReviewsAndRatings';
import LatestReviews from './components/LatestReviews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchOverviewReviews('5b16725b923e9e25353c330d');
  }

  render() {
    return (
      <div>
        <WhoIsStaying />
        <ReviewsAndRatings />
        <LatestReviews />
      </div>
    );
  }
}

App.propTypes = {
  fetchOverviewReviews: PropTypes.func.isRequired,
};
export default connect(
  null,
  { fetchOverviewReviews },
)(App);
