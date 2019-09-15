import { FETCH_ARTICLES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;

    default:
      return state;
  }
}
