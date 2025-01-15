import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SearchBar/SearchBar.css";
import GeocodingContext from "../../contexts/GeocodingContext";

export default function Geocoding() {
  const [enteredAddress, setEnteredAddress] = useState<string>("");

  const { setSubmitedAddress, searchedLoc } = useContext(GeocodingContext);

  const navigate = useNavigate();

  const handleSearchClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitedAddress(enteredAddress);
    if (searchedLoc !== undefined) {
      return navigate("/StreetArtMap");
    }
  };

  return (
    <>
      <form className="search-form">
        <div className="searchBar">
          <section className="searchGeo">
            <input
              className="citySearch"
              type="search"
              name="searchBar"
              placeholder="Recherchez une ville..."
              required
              onChange={(e) => {
                setEnteredAddress(e.target.value);
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
      </form>
    </>
  );
}
