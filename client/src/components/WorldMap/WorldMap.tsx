import "./WorldMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import paintRollerIcon from "../../assets/icones/pin_brush_big.png";
import paintBrushIcon from "../../assets/icones/pin_brush_small.png";
import mustardIcon from "../../assets/icones/pin_mustard.png";
import paintSprayIcon from "../../assets/icones/pin_spray.png";
import paintStickerIcon from "../../assets/icones/pin_sticker.png";

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

interface LocProps {
  searchedLoc?: [number, number];
}

function WorldMap({ searchedLoc }: LocProps) {
  const mustardPin = new Icon({
    iconUrl: `${mustardIcon}`,
    iconSize: [34, 38],
  });
  const StickerPin = new Icon({
    iconUrl: `${paintStickerIcon}`,
    iconSize: [34, 44],
  });
  const RollerPin = new Icon({
    iconUrl: `${paintRollerIcon}`,
    iconSize: [34, 44],
  });
  const BrushPin = new Icon({
    iconUrl: `${paintBrushIcon}`,
    iconSize: [34, 44],
  });
  const SprayPin = new Icon({
    iconUrl: `${paintSprayIcon}`,
    iconSize: [34, 44],
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
    <MapContainer center={searchedLoc} zoom={13} scrollWheelZoom={true}>
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
          <Marker
            position={art.coordinates}
            icon={
              art.type_of_art === "sticker"
                ? StickerPin
                : art.type_of_art === "wall painting"
                  ? RollerPin
                  : art.type_of_art === "paint"
                    ? BrushPin
                    : art.type_of_art === "tag"
                      ? SprayPin
                      : mustardPin
            }
            key={art.id}
          >
            <Popup
              // offset={isLargeScreen ? [500, 400] : [0, 80]}
              className="popup-card"
            >
              <h1>{art.name}</h1>
              <img className="popup-image" src={art.image} alt="streetart" />
              <h3>{art.address}</h3>
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}

export default WorldMap;
