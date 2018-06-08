import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {
  render() {
    return <div>Review Page</div>;
  }
}

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  {},
)(ReviewPage);
