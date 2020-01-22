import { all, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import axios from 'axios';

export function* fetchData() {
  try {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/posts');
    yield put(actions.fetchDataSuccess(response.data));
  } catch (error) {}
}

export function* rootSaga() {
  yield all([takeEvery(actions.SHOW_DATA, fetchData)]);
}

export default rootSaga;
