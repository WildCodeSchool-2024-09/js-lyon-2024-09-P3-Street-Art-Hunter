import "./Geolocalisation.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GeocodingContext from "../../contexts/GeocodingContext";

function Geolocalisation() {
  //Récupérer la position de l'utilisateur
  const getLocation = () => {
    const options = {
      enableHighAccuracy: true,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.info("Latitude:", latitude, "Longitude:", longitude);
          setSearchedLoc([latitude, longitude]);
          if (searchedLoc !== undefined) {
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

  const { setSearchedLoc, searchedLoc } = useContext(GeocodingContext);

  const navigate = useNavigate();
  return (
    <button onClick={getLocation} className="geo-btn" type="button">
      Autoriser la géolocalisation
    </button>
  );
}

export default Geolocalisation;
