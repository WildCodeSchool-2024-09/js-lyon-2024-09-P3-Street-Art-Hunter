import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [search, setSearch] = useState<string>(""); //Initialiser ma zone de texte en chaine de caractère vide //
  const navigate = useNavigate(); //Navigate pour rediriger sur la page Accueil qui contient la map //

  //   Fonction pour gérer la saisie dans la zone de texte, et rediriger vers la bonne page
  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/accueil");
  };
  console.info(search);

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
            {/* // Au click, je redirige vers la page accueil // */}
            <button className="geo-btn" type="button">
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
