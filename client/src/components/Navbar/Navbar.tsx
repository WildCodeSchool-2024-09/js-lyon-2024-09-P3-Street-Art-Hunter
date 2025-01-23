import "./Navbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AjoutArt from "../../assets/images/add_picture.png";
import Connection from "../../assets/images/connec_ash.png";
import Leadboard from "../../assets/images/lead_ash.png";
import Deconnexion from "../../assets/images/log_out.png";
import LoginContext from "../../contexts/LoginContext";

export default function Navbar() {
  const { user, setUser } = useContext(LoginContext);

  console.info(user);
  return (
    <>
      {user == null ? (
        <div className="navbar-icon box-divider">
          <hr className="vertical-divider" />
          <img src={Leadboard} alt="leadboard" />
          <hr />
          <Link to="/StreetArtMap/authentication">
            <img src={Connection} alt="connection" />
          </Link>
          <hr className="vertical-divider" />
        </div>
      ) : (
        <div className="navbar-icon box-divider">
          <hr className="vertical-divider" />
          <img src={Leadboard} alt="leadboard" />
          <hr />
          <Link to="/StreetArtMap/NewArtwork">
            <img src={AjoutArt} alt="ajout d'une oeuvre" />
          </Link>
          <hr />
          <Link
            to="/"
            className="logout-btn"
            onClick={() => {
              setUser(undefined);
            }}
          >
            <img src={Deconnexion} alt="deconnexion" />
          </Link>
          <hr className="vertical-divider" />
        </div>
      )}
    </>
  );
}
