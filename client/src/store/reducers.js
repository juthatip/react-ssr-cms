import { combineReducers } from 'redux';
import * as actionTypes from './actions';
import { updateObject } from '../shared/utility';

const initialState = {};

const fetchDataSuccess = (state, action) => {
  return updateObject(state, { result: action.result });
};

const getDataReducer = (state = initialState, action) => {
  // console.log('reducer action---', action.type);
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return fetchDataSuccess(state, action);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  home: getDataReducer
});

export default rootReducer;
