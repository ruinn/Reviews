import { combineReducers } from 'redux';
import overviewReviews from './overviewReviews';
import rankedFeatures from './rankedFeatures';

export default combineReducers({
  overviewReviews,
  rankedFeatures,
});
