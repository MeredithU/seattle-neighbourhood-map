import React from 'react';
import ReactDOM from 'react-dom';
import L from 'mapbox.js';
import $ from 'jquery';
import _ from 'lodash';
import './Map.scss';

class MapboxMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapData: [],
      map: {}
    };
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    const DOMAIN_NAME = 'data.seattle.gov';
    const DATASET_ID = '3c4b-gdxv';
    let apiUrl = `https://${DOMAIN_NAME}/resource/${DATASET_ID}.json`;

    $.ajax({
      url: apiUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          mapData: data
        })
      }.bind(this)
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillMount")
    console.log(nextProps)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate")

    L.mapbox.accessToken = this.props.accessToken;

    let latitude = this.props.center[0];
    let longitude = this.props.center[1];
    
    let geojson = nextState.mapData;
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

    this.setState({
      map: L.mapbox.map('map', this.props.mapId)
        .setView([latitude, longitude], this.props.zoom)
        .featureLayer.setGeoJSON(markers)
    })
  }

  shouldComponentUpdate() {
    return true;
    //return false;
  }

  render() {
    return (
      <div id='map' className='mapbox'></div>
    )
  }
};

MapboxMap.propTypes = {
  accessToken: React.PropTypes.string.isRequired,
  mapId: React.PropTypes.string.isRequired,
  center: React.PropTypes.array.isRequired,
  zoom: React.PropTypes.number.isRequired
};

export default MapboxMap;