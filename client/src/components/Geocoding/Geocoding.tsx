import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Geocoding.css";
import GeocodingContext from "../../contexts/GeocodingContext";
import { useTheme } from "../../contexts/ThemeContext";
import { ToasterError } from "../../services/ToasterFunctions";

export default function Geocoding() {
  const { setSubmitedAddress, getCoord, setSearchedLoc, searchedLoc } =
    useContext(GeocodingContext);
  const { theme } = useTheme();

  const navigate = useNavigate();

  //Récupérer la position de la page (= le path)
  const location = useLocation();

  const handleSearchClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearchedLoc(undefined);
    // permet de récupérer les informations de localisation via le context qui utilise l'Api dans le serveur.
    getCoord();
    // gére les erreurs de saisie qui ont donné une erreur :
    if (searchedLoc === undefined) {
      if (location.pathname !== "/StreetArtMap/NewArtwork") {
        navigate("/StreetArtMap/Error");
      }
      ToasterError(
        "Hmm… on dirait que cette adresse fait du cache-cache. Réessaie ! 🏠❌",
        theme,
      );
    } else {
      // si le composant n'est pas sur la page d'ajout d'oeuvre alors navigate à la carte
      if (location.pathname !== "/StreetArtMap/NewArtwork") {
        navigate("/StreetArtMap");
      }
    }
  };

  return (
    <div className="searchBar">
      <section className="searchGeo">
        <input
          aria-label="rechercher une ville"
          className={location.pathname === "/" ? "citySearch" : "artSearch"}
          type="search"
          name="searchBar"
          placeholder="Recherchez une ville..."
          required
          onChange={(e) => {
            setSubmitedAddress(e.target.value);
          }}
        />
      </section>
      <button
        className="search-btn"
        type="submit"
        onClick={handleSearchClick} //Confirmer l'envoi de l'adresse "submitedAddress" à l'API
      >
        Rechercher
      </button>
    </div>
  );
}
