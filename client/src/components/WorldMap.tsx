import "../components/WorldMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import mustardIcon from "../assets/icones/pin_mustard.png";

function WorldMap() {
  const mustardPin = new Icon({
    iconUrl: `${mustardIcon}`,
    iconSize: [38, 38],
  });
  return (
    <MapContainer center={[45.76, 4.83]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      <Marker position={[45.76, 4.83]} icon={mustardPin}>
        <Popup>Ici réside City Canvas !</Popup>
      </Marker>
    </MapContainer>
  );
}

export default WorldMap;
