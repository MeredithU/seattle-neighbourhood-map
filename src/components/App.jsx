import React from 'react';
import ReactDOM from 'react-dom';
import EnvironmentVariables from '../environment-variables.js';
import Title from './Title.jsx';
import SeattleMap from './SeattleMap.jsx';
import SeattleMapBox from './SeattleMapBox.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title title='Leaflet Map' />
        <SeattleMap position={[47.6204, -122.3491]} zoom={14} />
        <Title title='Mapbox Map' />
        <SeattleMapBox accessToken={EnvironmentVariables.MAPBOX_ACCESS_TOKEN} mapId={EnvironmentVariables.MAPBOX_MAP_ID} center={[47.6204, -122.3491]} zoom={13} />
      </div>
    );
  }
};

export default App;