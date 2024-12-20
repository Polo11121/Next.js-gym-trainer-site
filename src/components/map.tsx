"use client";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export const Map = () => {
  const latitude = 53.693189;
  const longitude = 19.96107;
  const greenIcon = new Icon({
    iconUrl: "/images/gym.png",
    iconSize: [50, 50],
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      style={{ height: "500px", width: "100%" }}
      minZoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={greenIcon}>
        <Popup>Xtreme Fitness Ostróda</Popup>
      </Marker>
    </MapContainer>
  );
};
