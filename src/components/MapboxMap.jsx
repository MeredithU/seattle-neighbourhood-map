import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index.jsx';

import L from 'mapbox.js';
import MarkerClusterGroup from 'leaflet.markercluster';
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
        .setView([latitude, longitude], this.props.zoom);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.categoryFilter);

    let currentFilter = nextProps.categoryFilter,
        geojson,
        markers = [];

    // Cluster data points and add layer onto map
    let clusterGroup = new L.MarkerClusterGroup({
      showCoverageOnHover: false
    });

    // Retrieve the geojson data based on chosen category filter and create markers to be displayed on the map
    if (currentFilter === 'ALL') {
      geojson = nextProps.allDataPoints.mapPoints;
    } else {
      // TO DO : set geojson variable to filtered mapPoints 
    }

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

    let geoJsonLayer = L.geoJson(markers, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p class="marker-title">' + feature.properties.landmark + '</p>' + 
                           '<p class="marker-description"><strong>Name: </strong>' + feature.properties.title + '</p>' + 
                           '<p class="marker-description"><strong>Address: </strong>' + feature.properties.description + '</p>');
      }
    });

    clusterGroup.addLayer(geoJsonLayer);
    this.map.addLayer(clusterGroup);
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
    allDataPoints: state.allDataPoints,
    categoryFilter: state.categoryFilter
  };
}

MapboxMap.propTypes = {
  accessToken: React.PropTypes.string.isRequired,
  mapId: React.PropTypes.string.isRequired,
  center: React.PropTypes.array.isRequired,
  zoom: React.PropTypes.number.isRequired
};

export default connect(mapStateToProps)(MapboxMap);