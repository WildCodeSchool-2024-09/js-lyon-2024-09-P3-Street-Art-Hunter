import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  //Gérer la saisie dans la zone de texte, puis rediriger vers la bonne page
  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/StreetArtMap");
  };
  console.info(search);

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

  return (
    <div className="search-sct">
      <form>
        <div className="searchBar">
          <section className="searchGeo">
            <input
              className="citySearch"
              type="search"
              name="searchBar"
              placeholder="Recherchez une ville..."
              required
              onChange={(e) => setSearch(e.target.value)} //Stocker le texte saisie dans la variable search
            />
            <button onClick={getLocation} className="geo-btn" type="button">
              Autoriser la géolocalisation
            </button>
          </section>
          <button
            className="search-btn"
            type="submit"
            onClick={handleSearchSubmit}
          >
            Recherche
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
