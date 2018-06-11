import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewCard from './ReviewCard';
class ReviewPage extends Component {
  render() {
    const { reviewSnippet } = this.props;
    return reviewSnippet.map(props => (
      <ReviewCard key={props._id} {...props} />
    ));
  }
}

const mapStateToProps = ({ sidebarReducer }) => ({
  reviewSnippet: sidebarReducer.reviewSnippet
    ? sidebarReducer.reviewSnippet
    : []
});

export default connect(
  mapStateToProps,
  {}
)(ReviewPage);
