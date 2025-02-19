import "./WorldMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import paintBrushIcon from "../../assets/icones/pin-black.png";
import paintStickerIcon from "../../assets/icones/pin-chevalier.png";
import paintRollerIcon from "../../assets/icones/pin-grey.png";
import mustardIcon from "../../assets/icones/pin_mustard.png";
import paintSprayIcon from "../../assets/icones/pin_spray.png";
import plusIcon from "../../assets/icones/plus_icon_mustard.png";

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

// définition des différents Pin pour les oeuvres de type différents.
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

  const navigate = useNavigate();

  const handleClickArt = (id: number) => {
    navigate(`/StreetArtMap/${id}`);
  };

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
                  : art.type_of_art === "stencil"
                    ? BrushPin
                    : art.type_of_art === "tag"
                      ? SprayPin
                      : mustardPin
            }
            key={art.id}
          >
            <Popup className="popup-card">
              <h1>{art.name}</h1>
              <img className="popup-image" src={art.image} alt="streetart" />
              <p>{art.address}</p>
              <button
                type="button"
                onClick={() => handleClickArt(art.id)}
                className="plus_btn"
              >
                <img src={plusIcon} alt="plus d'information" />
              </button>
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}

export default WorldMap;
