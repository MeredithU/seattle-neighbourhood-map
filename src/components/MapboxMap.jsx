import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index.jsx';

import L from 'mapbox.js';
import _ from 'lodash';

import './Map.scss';

class MapboxMap extends React.Component {

  componentWillMount() {
    // Using Redux, fetch the data from the Socrata API and set it to the global state
    this.props.dispatch(fetchData(this.props.domainName, this.props.datasetId));
  }

  componentDidMount() {
    // Render the map onto the page
    L.mapbox.accessToken = this.props.accessToken;

    let latitude = this.props.center[0];
    let longitude = this.props.center[1];

    this.map = L.mapbox.map('map', this.props.mapId)
        .setView([latitude, longitude], this.props.zoom)
  }

  componentWillReceiveProps(nextProps) {
    // Retrieve the geojson data and create markers to be displayed on the map
    let geojson = nextProps.mapData.mapPoints;
    let markers = [];

    _.map(geojson, function(mapPoint) {
      markers.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [mapPoint['longitude'], mapPoint['latitude']]
        },
        properties: {
            title: mapPoint['common_name'],
            landmark: mapPoint['city_feature'],
            description: mapPoint['address'],
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'commercial'
        }
      })
    });

    this.map.featureLayer.setGeoJSON(markers)
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <div id='map' className='mapbox'></div>
      </div>  
    )
  }
};

function mapStateToProps(state) {
  return {
    mapData: state.mapData
  };
}

MapboxMap.propTypes = {
  accessToken: React.PropTypes.string.isRequired,
  mapId: React.PropTypes.string.isRequired,
  center: React.PropTypes.array.isRequired,
  zoom: React.PropTypes.number.isRequired
};

export default connect(mapStateToProps)(MapboxMap);