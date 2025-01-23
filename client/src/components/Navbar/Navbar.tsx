import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AjoutArt from "../../assets/images/add_picture.png";
import Connection from "../../assets/images/connec_ash.png";
import Leadboard from "../../assets/images/lead_ash.png";
import LoginContext from "../../contexts/LoginContext";

export default function Navbar() {
  const { user, setUser } = useContext(LoginContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpeningMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="navbar-icon box-divider">
      <hr className="vertical-divider" />
      <img src={Leadboard} alt="leadboard" />
      <hr />
      {user === undefined ? (
        <Link to="/StreetArtMap/authentication">
          <img src={Connection} alt="connection" />
        </Link>
      ) : (
        <>
          <Link to="/StreetArtMap/NewArtwork">
            <img src={AjoutArt} alt="ajout d'une oeuvre" />
          </Link>
          <hr className="vertical-divider" />
          <button
            type="button"
            className="menu-button"
            onClick={handleOpeningMenu}
          >
            <img src={Connection} alt="connection" />
          </button>
          {isOpenMenu && (
            <div className="dropdown">
              <ul>
                <Link to="/profile">
                  <li>Profil</li>
                </Link>
                <Link to="/StreetArtMap">
                  <li>Worldmap</li>
                </Link>
                <Link to="/StreetArtMap/authentication">
                  <li
                    onClick={() => setUser(undefined)}
                    onKeyUp={() => setUser(undefined)}
                  >
                    Logout
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </>
      )}
      <hr className="vertical-divider" />
    </div>
  );
}
