import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openSidebarAndFetchFullReviews } from '../../actions/sidebarActions';

class ReadAllReviewsButton extends Component {
  handleOnClick() {
    console.log('clicked', this.props);
    this.props.openSidebarAndFetchFullReviews(this.props.hostelId);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleOnClick()}>Read all reviews</button>
      </div>
    );
  }
}

ReadAllReviewsButton.propTypes = {
  openSidebarAndFetchFullReviews: PropTypes.func.isRequired,
  hostelId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  hostelId: state.overviewReviews._id || '',
});

export default connect(
  mapStateToProps,
  { openSidebarAndFetchFullReviews },
)(ReadAllReviewsButton);
