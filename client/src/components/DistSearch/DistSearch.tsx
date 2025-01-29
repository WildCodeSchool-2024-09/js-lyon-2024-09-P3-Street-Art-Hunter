import "./DistSearch.css";
import { useState } from "react";
import searchGlass from "../../assets/icones/glass_mustard.png";
import Geocoding from "../Geocoding/Geocoding";
import Geolocalisation from "../Geolocalisation/Geolocalisation";

interface styleProps {
  componentLoc: string;
}

export default function DistSearch({ componentLoc }: styleProps) {
  const [deploySearch, setDeploySearch] = useState(false);

  const handleClick = () => {
    if (deploySearch === false) {
      setDeploySearch(true);
    } else {
      setDeploySearch(false);
    }
  };

  return (
    <section className={componentLoc}>
      <button type="button" className="button_search" onClick={handleClick}>
        <img
          src={searchGlass}
          alt="search for position"
          className="image_search"
        />
      </button>
      {/* clicking on the button change the state to make options appear and allow the search of a location */}
      {deploySearch && (
        <article className="search_tools">
          <Geocoding />
          <Geolocalisation />
        </article>
      )}
    </section>
  );
}
