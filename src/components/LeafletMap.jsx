import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.scss';

class LeafletMap extends React.Component {
  render() {
    return (
      <Map center={this.props.position} zoom={this.props.zoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.props.position}>
          <Popup>
            <span>Space Needle<br/>Seattle WA</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
};

LeafletMap.propTypes = {
  position: React.PropTypes.array.isRequired,
  zoom: React.PropTypes.number.isRequired
};

export default LeafletMap;