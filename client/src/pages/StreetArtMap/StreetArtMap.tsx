import "../../App.css";
import "./StreetArtMap.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";
import Loader from "../../components/Loader/Loader";
import WorldMap from "../../components/WorldMap/WorldMap";
import GeocodingContext from "../../contexts/GeocodingContext";

function StreetArtMap() {
  const { searchedLoc } = useContext(GeocodingContext);
  console.info(searchedLoc);
  return (
    <>
      <Link to="/" className="link-logo">
        <img src={Logo} alt="logoCC" className="narrow-logo" />
      </Link>
      {searchedLoc !== undefined ? (
        // déclenche le navigate uniquement si on a les coordonnées géographique.
        <WorldMap searchedLoc={searchedLoc} />
      ) : (
        <Loader />
      )}
    </>
  );
}

export default StreetArtMap;
