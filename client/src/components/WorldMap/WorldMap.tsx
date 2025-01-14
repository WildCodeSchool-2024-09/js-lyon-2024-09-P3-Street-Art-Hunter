import "./WorldMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import mustardIcon from "../../assets/icones/pin_mustard.png";

interface artwork {
  id: number;
  name: string;
  address: string;
  image: string;
  picture_date: string;
  type_of_art: string;
  coordinates: [number, number];
  picture_credit: string;
}

function WorldMap() {
  const mustardPin = new Icon({
    iconUrl: `${mustardIcon}`,
    iconSize: [38, 38],
  });

  const [artwork, setArtworks] = useState<artwork[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/artworks`)
      .then((response) => response.json())
      .then((data: artwork[]) => {
        setArtworks(data);
      });
  }, []);

  return (
    <MapContainer center={[45.76, 4.83]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      {artwork.length === 0 || artwork === null || artwork === undefined ? (
        <Marker position={[45.76, 4.83]} icon={mustardPin}>
          <Popup>Ici réside City Canvas !</Popup>
        </Marker>
      ) : (
        artwork.map((art) => (
          <Marker position={art.coordinates} icon={mustardPin} key={art.id}>
            <Popup>{art.name}</Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}

export default WorldMap;
