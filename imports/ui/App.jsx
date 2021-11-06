import React from 'react';

import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, GeoJSON, LayerGroup } from 'react-leaflet';

import data from './data.js';
export const App = () => {
  const bindPopupToAllCommunes = (comm, layer) => {
    layer.bindPopup(comm.properties.nom);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <MapContainer center={[43, 1.77]} zoom={11}>
        {' '}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <GeoJSON onEachFeature={bindPopupToAllCommunes} data={data.data} />
        </LayerGroup>
      </MapContainer>
    </div>
  );
};
