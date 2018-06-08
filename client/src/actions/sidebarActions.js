import axios from 'axios';
import { OPEN_SIDEBAR_AND_FETCH_FULL_REVIEWS } from '../types';

export const openSidebarAndFetchFullReviews = hostelId => (dispatch) => {
  axios.get(`http://localhost:3004/api/reviews/${hostelId}/all`).then((res) => {
    console.log('res.data', res.data);

    dispatch({
      type: OPEN_SIDEBAR_AND_FETCH_FULL_REVIEWS,
      payload: 'ha',
    });
  });
};

export const num = 1;
