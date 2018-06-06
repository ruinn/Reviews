import React, { Component } from 'react';
import { connect } from 'react-redux';

class RankedRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankedFeatures: [],
    };
  }

  // TODO: fix ranked features
  componentWillReceiveProps(nextProps) {
    if (nextProps.rankedFeatures) {
      this.setState({ rankedFeatures: nextProps.rankedFeatures });
    }
  }

  render() {
    const { rankedFeatures } = this.state;
    return <div>{rankedFeatures ? rankedFeatures.map(feature => <div>{feature}</div>) : null}</div>;
  }
}

// const RankedRating = ({ rankedFeatures }) => {
//   console.log('rankedFeatures', rankedFeatures);
//   // return rankedFeatures ? rankedFeatures.map(feature => <div>{feature}</div>) : null;
//   return <div>haha</div>;
// };

// const RankedRating = () => <div>HAHA</div>;

const mapStateToProps = state => ({
  rankedFeatures: state.rankedFeatures,
});

export default connect(
  mapStateToProps,
  {},
)(RankedRating);
