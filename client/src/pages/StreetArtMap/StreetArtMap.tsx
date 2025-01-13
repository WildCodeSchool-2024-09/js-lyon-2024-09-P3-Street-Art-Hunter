import "../../App.css";
import "./StreetArtMap.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";
import WorldMap from "../../components/WorldMap/WorldMap";

function StreetArtMap() {
  return (
    <>
      <Link to="/" className="link-logo">
        <img src={Logo} alt="logoCC" className="narrow-logo" />
      </Link>
      <WorldMap />
    </>
  );
}

export default StreetArtMap;
