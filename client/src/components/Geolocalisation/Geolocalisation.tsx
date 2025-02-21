import "./Geolocalisation.css";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GeocodingContext from "../../contexts/GeocodingContext";

function Geolocalisation() {
  //Récupérer la position de la page (= le path)
  const location = useLocation();

  //Récupérer les informations contenus dans le context
  const { setSearchedLoc } = useContext(GeocodingContext);

  //Récupérer la position de l'utilisateur
  const getLocation = () => {
    const options = {
      enableHighAccuracy: true,
    };
    if (location.pathname === "/StreetArtMap") {
      setSearchedLoc(undefined);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSearchedLoc([latitude, longitude]);
          if (location.pathname !== "/StreetArtMap/NewArtwork") {
            return navigate("/StreetArtMap");
          }
        },
        () => {
          console.error("Autorisation de récupérer la position refusée");
        },
        options,
      );
    } else {
      console.error("Impossible de récupérer la position");
    }
  };

  const navigate = useNavigate();
  return (
    <button
      onClick={getLocation}
      className={
        location.pathname !== "/StreetArtMap" ? "geo-btn" : "geo-btn-map"
      }
      type="button"
    >
      {location.pathname !== "/StreetArtMap/NewArtwork"
        ? "Autorise la géolocalisation et nous viendrons à toi"
        : "Autorise la géolocalisation pour nous mener à ton oeuvre"}
    </button>
  );
}

export default Geolocalisation;
