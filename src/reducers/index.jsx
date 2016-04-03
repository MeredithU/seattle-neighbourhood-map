import { combineReducers } from 'redux';
import { REQUEST_DATA, RECEIVE_DATA, INVALIDATE_DATA } from '../actions/index.jsx';

const initialState = {
  isFetching: false,
  cityFeatures: []
}

function mapData(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        isFetching: false,
        cityFeatures: action.mapData
      });
  }

  return state;
}

const rootReducer = combineReducers({
  mapData
});

export default rootReducer;