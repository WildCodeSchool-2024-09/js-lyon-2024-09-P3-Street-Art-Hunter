import "./SearchBar.css";
import Geocoding from "../Geocoding/Geocoding";

function SearchBar() {
  return (
    <div className="search-sct">
      <Geocoding />
      <button className="geo-btn" type="button">
        Autoriser la géolocalisation
      </button>
    </div>
  );
}

export default SearchBar;
