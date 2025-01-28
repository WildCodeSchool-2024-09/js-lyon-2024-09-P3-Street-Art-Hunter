import "./DistSearch.css";
import { useState } from "react";
import searchGlass from "../../assets/icones/glass_mustard.png";
import Geocoding from "../Geocoding/Geocoding";
import Geolocalisation from "../Geolocalisation/Geolocalisation";

export default function DistSearch() {
  const [deploySearch, setDeploySearch] = useState(false);

  const handleClick = () => {
    if (deploySearch === false) {
      setDeploySearch(true);
    } else {
      setDeploySearch(false);
    }
  };

  return (
    <section className="section_search">
      <button type="button" className="button_search" onClick={handleClick}>
        <img
          src={searchGlass}
          alt="search for position"
          className="image_search"
        />
      </button>
      {deploySearch && (
        <article className="search_tools">
          <Geocoding />
          <Geolocalisation />
        </article>
      )}
    </section>
  );
}
