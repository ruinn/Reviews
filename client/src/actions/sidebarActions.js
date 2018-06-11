import axios from 'axios';
import {
  OPEN_SIDEBAR_AND_FETCH_FULL_REVIEWS,
  FETCH_OVERVIEW_REVIEWS,
  FETCH_REVIEWS_ON_PAGE,
  TOGGLE_ENGLISH_ONLY_REVIEW_OPTION,
  CHANGE_SORTBY,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
} from '../types';

export const openSidebarAndFetchFullReviews = hostelId => dispatch => {
  axios.get(`http://localhost:3004/api/reviews/${hostelId}/all`).then(res => {
    console.log('res.data', res.data);

    dispatch({
      type: OPEN_SIDEBAR_AND_FETCH_FULL_REVIEWS,
      // res.data = { reviewSnippet, total}
      payload: res.data
    });
  });
};

export const fetchReviewsOnPage = (
  pageNumber,
  hostelId,
  sortBy,
  isEnglish
) => dispatch => {
  const url = `http://localhost:3004/api/reviews/${hostelId}/all?pageNum=${pageNumber}&eng=${isEnglish}&sortBy=${sortBy}`;
  console.log(url);
  axios.get(url).then(res => {
    console.log('res.data', res.data);

    dispatch({
      type: FETCH_REVIEWS_ON_PAGE,
      payload: { ...res.data, pageNum: pageNumber }
    });
  });
};

export const showOnlyEnglishReviews = boolean => ({
  type: TOGGLE_ENGLISH_ONLY_REVIEW_OPTION,
  payload: boolean
});

export const changeSortByTo = str => ({
  type: CHANGE_SORTBY,
  payload: str
});

export const openSidebar = () => ({
  type: OPEN_SIDEBAR
});

export const closeSidebar = () => ({
  type: CLOSE_SIDEBAR
});
