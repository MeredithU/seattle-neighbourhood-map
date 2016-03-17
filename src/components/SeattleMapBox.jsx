import React from 'react';
import ReactDOM from 'react-dom';
import L from 'mapbox.js';
import './SeattleMap.scss';

class SeattleMapBox extends React.Component {

  componentDidMount() {
    L.mapbox.accessToken = this.props.accessToken;

    var latitude = this.props.center[0];
    var longitude = this.props.center[1];

    var map = L.mapbox.map('map', this.props.mapId).setView([latitude, longitude], this.props.zoom);

    L.mapbox.featureLayer({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude]
      },
      properties: {
          title: 'Space Needle',
          description: 'Seattle, WA',
          'marker-size': 'large',
          'marker-color': '#BE9A6B',
          'marker-symbol': 'commercial'
      }
    }).addTo(map);
  }

  render() {
    var mapStyle = {
      width: '80%',
      height: '400px'
    };

    return (
      <div id='map' className='mapbox'></div>
    )
  }
};

SeattleMapBox.propTypes = {
  accessToken: React.PropTypes.string.isRequired,
  mapId: React.PropTypes.string.isRequired
};

export default SeattleMapBox;