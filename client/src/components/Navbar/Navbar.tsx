import "./Navbar.css";
import { Link } from "react-router-dom";
import Connection from "../../assets/images/connec_ash.png";
import Leadboard from "../../assets/images/lead_ash.png";

export default function Navbar() {
  return (
    <div className="navbar-icon box-divider">
      <hr className="vertical-divider" />
      <img src={Leadboard} alt="leadboard" />
      <hr />
      <Link to="/StreetArtMap/authentication">
        <img src={Connection} alt="connection" />
      </Link>
      <hr className="vertical-divider" />
    </div>
  );
}
