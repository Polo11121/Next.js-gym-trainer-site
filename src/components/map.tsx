import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Map = () => {
  const latitude = 53.693189;
  const longitude = 19.96107;

  const secondLatitude = 53.698946;
  const secondLongitude = 19.962359;
  const greenIcon = new Icon({
    iconUrl: "/images/gym.svg",
    iconSize: [50, 50],
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13.5}
      style={{ height: "500px", width: "100%" }}
      minZoom={13.5}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={greenIcon}>
        <Popup>
          <span className="block text-center">Xtreme Fitness Ostróda</span>
          <span className="block text-center">(Wojska Polskiego 6)</span>
        </Popup>
      </Marker>
      <Marker position={[secondLatitude, secondLongitude]} icon={greenIcon}>
        <Popup>
          <span className="block text-center">Prywatne studio do ćwiczeń</span>
          <span className="block text-center">(Czarnieckiego 15A/II)</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
