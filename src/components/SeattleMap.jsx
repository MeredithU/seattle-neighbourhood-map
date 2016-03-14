import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './SeattleMap.scss';

class SeattleMap extends React.Component {
  render() {
    const position = [47.6204, -122.3491];
    return (
      <Map center={position} zoom={14}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>Popup</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
};

export default SeattleMap;