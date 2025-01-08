import "../../App.css";
import "./PageAccueil.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";
import WorldMap from "../../components/WorldMap/WorldMap";

function PageAccueil() {
  return (
    <>
      <Link to="/" className="link-logo">
        <img src={Logo} alt="logoCC" className="narrow-logo" />
      </Link>
      <WorldMap />
    </>
  );
}

export default PageAccueil;
