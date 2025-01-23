import "./SearchBar.css";
import Geocoding from "../Geocoding/Geocoding";
import Geolocalisation from "../Geolocalisation/Geolocalisation";

function SearchBar() {
  return (
    <div className="search-sct">
      <Geocoding />
      <Geolocalisation />
    </div>
  );
}

export default SearchBar;
