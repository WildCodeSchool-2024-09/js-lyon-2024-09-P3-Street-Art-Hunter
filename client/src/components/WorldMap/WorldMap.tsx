import "./WorldMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useContext, useEffect, useState } from "react";
import paintRollerIcon from "../../assets/icones/pin_brush_big.png";
import paintBrushIcon from "../../assets/icones/pin_brush_small.png";
import mustardIcon from "../../assets/icones/pin_mustard.png";
import paintSprayIcon from "../../assets/icones/pin_spray.png";
import paintStickerIcon from "../../assets/icones/pin_sticker.png";
import GeocodingContext from "../../contexts/GeocodingContext";
import PopupArtwork from "../PopupArtwork/PopupArtwork";

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

  const [artworks, setArtworks] = useState<artwork[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/artworks`)
      .then((response) => response.json())
      .then((data: artwork[]) => {
        setArtworks(data);
      });
  }, []);

  const { searchedLoc } = useContext(GeocodingContext);

  //spécifique à la popup :
  const [popup, setPopup] = useState(false);
  const [selectedId, setSelectedId] = useState<number>(-1);
  const handleClick = (chosenId: number) => {
    setPopup(true);
    setSelectedId(chosenId);
  };

  const mapStyle = () => {
    if (popup === true) {
      return "cutMap";
    }
    return "bigMap";
  };

  return (
    <section className="mapShow">
      <article className={mapStyle()}>
        <MapContainer center={searchedLoc} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          />
          {artworks.length === 0 ||
          artworks === null ||
          artworks === undefined ? (
            <Marker position={[45.76, 4.83]} icon={mustardPin}>
              <Popup>Ici réside City Canvas !</Popup>
            </Marker>
          ) : (
            artworks.map((art) => (
              <button
                className="btn_art"
                type="button"
                onClick={() => {
                  handleClick(art.id);
                }}
                key={art.id}
              >
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
                >
                  <Popup className="small_popup">{art.name}</Popup>
                </Marker>
              </button>
            ))
          )}
        </MapContainer>
      </article>
      {popup === true && (
        <PopupArtwork
          triggerPopup={popup}
          setTriggerPopup={setPopup}
          id={selectedId}
        />
      )}
    </section>
  );
}

export default WorldMap;
