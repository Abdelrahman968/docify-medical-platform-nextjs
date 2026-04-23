'use client';

import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

export default function MapClient() {
  return (
    <MapContainer
      center={[24.7136, 46.6753]}
      zoom={13}
      minZoom={5}
      maxZoom={18}
      scrollWheelZoom={false}
      zoomControl={false}
      preferCanvas={true}
      style={{ height: '400px', width: '100%' }}
      className="rounded-2xl z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© Docify"
      />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}
