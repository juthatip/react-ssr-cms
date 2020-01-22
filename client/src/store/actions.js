export const SHOW_DATA = 'SHOW_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchData = () => {
  return {
    type: SHOW_DATA
  };
};

export const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    result: data
  };
};
