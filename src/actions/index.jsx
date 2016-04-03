import fetch from 'isomorphic-fetch';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const INVALIDATE_DATA = 'INVALIDATE_DATA';

export function invalidateData() {
  return {
    type: INVALIDATE_DATA
  }
}

export function fetchData(domainName, datasetId) {
  return dispatch => {
    dispatch(requestData())
    return fetch(`https://${domainName}/resource/${datasetId}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}

function requestData() {
  return {
    type: REQUEST_DATA
  }
}

function receiveData(json) {
  return {
    type: RECEIVE_DATA,
    mapData: json
  }
}