import React from 'react';
import ReactDOM from 'react-dom';

import EnvironmentVariables from '../environment-variables.js';

import Title from './Title.jsx';
import FilterList from './FilterList.jsx';
import MapboxMap from './MapboxMap.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <Title title='Seattle City Features' />
        <MapboxMap domainName='data.seattle.gov' datasetId='3c4b-gdxv' accessToken={EnvironmentVariables.MAPBOX_ACCESS_TOKEN} mapId={EnvironmentVariables.MAPBOX_MAP_ID} center={[47.6204, -122.3491]} zoom={13} />
        <FilterList />
      </div>
    );
  }
};

export default App;