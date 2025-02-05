import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Geocoding.css";
import GeocodingContext from "../../contexts/GeocodingContext";

export default function Geocoding() {
  const { setSubmitedAddress, getCoord, setSearchedLoc } =
    useContext(GeocodingContext);

  const navigate = useNavigate();

  //Récupérer la position de la page (= le path)
  const location = useLocation();

  const handleSearchClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearchedLoc(undefined);
    // permet de récupérer les informations de localisation via le context qui utilise l'Api dans le serveur.
    getCoord();
    // si le composant est sur la page Home alors navigate to, sinon, aller nulle part ?
    if (location.pathname !== "/StreetArtMap/NewArtwork") {
      navigate("/StreetArtMap");
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
        onClick={handleSearchClick} //Confirmer l'envoi de l'adresse à l'API
      >
        Rechercher
      </button>
    </div>
  );
}
