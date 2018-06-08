import { OPEN_SIDEBAR_AND_FETCH_FULL_REVIEWS } from '../types';

const initialState = {
  sidebarOn: false,
  isEnglish: true,
  pageNum: 1,
  sortBy: 'latest'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR_AND_FETCH_FULL_REVIEWS:
      // return { ...state, ...action.payload, sidebarOn: true };
      return { ...state };
    default:
      return state;
  }
}
