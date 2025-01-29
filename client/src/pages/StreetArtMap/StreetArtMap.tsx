import "../../App.css";
import "./StreetArtMap.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";
import DistSearch from "../../components/DistSearch/DistSearch";
import Loader from "../../components/Loader/Loader";
import WorldMap from "../../components/WorldMap/WorldMap";
import GeocodingContext from "../../contexts/GeocodingContext";

function StreetArtMap() {
  const { searchedLoc } = useContext(GeocodingContext);

  const worldmapLoc = "section_search_worldMap";

  return (
    <>
      <Link to="/" className="link-logo">
        <img src={Logo} alt="logo de citycanvas" className="narrow-logo" />
      </Link>
      {searchedLoc !== undefined ? (
        // déclenche le navigate uniquement si on a les coordonnées géographique.
        <>
          <DistSearch componentLoc={worldmapLoc} />
          <WorldMap searchedLoc={searchedLoc} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default StreetArtMap;
