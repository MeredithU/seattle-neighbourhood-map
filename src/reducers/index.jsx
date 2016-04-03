import { combineReducers } from 'redux';
import { REQUEST_DATA, RECEIVE_DATA, INVALIDATE_DATA } from '../actions/index.jsx';

import _ from 'lodash';

const initialState = {
  isFetching: false,
  mapPoints: [],
  cityFeaturesList: []
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
        mapPoints: action.mapData,
        cityFeaturesList: findUniqueCityFeatures(action.mapData)
      });
  }

  return state;
}

function findUniqueCityFeatures(allMapData) {
  let cityFeaturesArr = [],
      cityFeaturesFilterList = [];

  _.map(allMapData, function(mapPoint) {
    cityFeaturesArr.push(
      mapPoint['city_feature']
    )
  });

  cityFeaturesFilterList = _.uniq(cityFeaturesArr).sort();

  return cityFeaturesFilterList;
}

const rootReducer = combineReducers({
  mapData
});

export default rootReducer;