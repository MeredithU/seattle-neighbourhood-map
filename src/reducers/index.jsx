import { combineReducers } from 'redux';
import { REQUEST_DATA, RECEIVE_DATA, INVALIDATE_DATA, SET_CATEGORY_FILTER } from '../actions/index.jsx';

import _ from 'lodash';

const mapInitialState = {
  isFetching: false,
  allData: [],
  cityFeaturesList: []
}

const allDataPoints = (state = mapInitialState, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        isFetching: false,
        allData: action.allDataPoints.map((dataPoint, index) => {
          return {
            dataPoint: dataPoint,
            dataPoint_id: index
          }
        }),
        cityFeaturesList: findUniqueCityFeatures(action.allDataPoints)
      });
  }

  return state;
}

const findUniqueCityFeatures = (allDataPoints) => {
  let cityFeaturesArr = [],
      cityFeaturesFilterList = [];

  _.map(allDataPoints, function(dataPoint) {
    cityFeaturesArr.push(
      dataPoint['city_feature']
    )
  });

  cityFeaturesFilterList = _.uniq(cityFeaturesArr).sort();

  return cityFeaturesFilterList;
}


const categoryFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':      
      return action.filter
    default:
      return state 
  }
}

const rootReducer = combineReducers({
  allDataPoints,
  categoryFilter
});

export default rootReducer;