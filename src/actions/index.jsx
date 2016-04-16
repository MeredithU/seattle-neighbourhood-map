import fetch from 'isomorphic-fetch';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const INVALIDATE_DATA = 'INVALIDATE_DATA';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

export const fetchData = (domainName, datasetId) => {
  return dispatch => {
    dispatch(requestData())
    return fetch(`https://${domainName}/resource/${datasetId}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}

export const setCategoryFilter = (filter) => {
  return {
    type: SET_CATEGORY_FILTER,
    filter
  }
}

export const invalidateData = () => {
  return {
    type: INVALIDATE_DATA
  }
}

const requestData = () => {
  return {
    type: REQUEST_DATA
  }
}

const receiveData = (json) => {
  return {
    type: RECEIVE_DATA,
    allDataPoints: json
  }
}