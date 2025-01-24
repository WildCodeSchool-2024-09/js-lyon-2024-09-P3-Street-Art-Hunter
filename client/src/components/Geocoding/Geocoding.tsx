import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Geocoding.css";
import GeocodingContext from "../../contexts/GeocodingContext";

export default function Geocoding() {
  const { setSubmitedAddress, getCoord } = useContext(GeocodingContext);

  const navigate = useNavigate();

  //Récupérer la position de la page (= le path)
  const location = useLocation();

  const handleSearchClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // permet de récupérer les informations de localisation via le context qui utilise l'Api dans le serveur.
    getCoord();
    // si le composant est sur la page Home alors navigate to, sinon, ne pas aller quelque part ?
    if (location.pathname === "/") {
      navigate("/StreetArtMap");
    }
  };

  return (
    <div className="searchBar">
      <section className="searchGeo">
        <input
          className={location.pathname === "/" ? "citySearch" : "artSearch"}
          type="search"
          name="searchBar"
          placeholder="Recherchez une ville..."
          required
          onChange={(e) => {
            setSubmitedAddress(e.target.value);
          }} //Stocker le texte saisie dans une variable pour la donner
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
