import "./DistSearch.css";
import { useState } from "react";
import SearchGlass from "../../assets/icones/glass_mustard.png";
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
          src={SearchGlass}
          alt="search for position"
          className="image_search"
        />
      </button>
      {/* clicker sur le boutton change le state pour faire apparaitre les options et permettre la recherche d'une nouvelle localisation */}
      {deploySearch && (
        <article className="search_tools">
          <Geocoding />
          <Geolocalisation />
        </article>
      )}
    </section>
  );
}
