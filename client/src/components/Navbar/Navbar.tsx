import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AjoutArt from "../../assets/images/add_picture.png";
import Connection from "../../assets/images/connec_ash.png";
import ConnectionSmall from "../../assets/images/connec_ash.png";
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
          <hr className="vertical-divider" />
          <Link to="/StreetArtMap/NewArtwork">
            <img src={AjoutArt} alt="ajout d'une oeuvre" />
          </Link>
          <hr />
          <button
            type="button"
            className="menu-button"
            onClick={handleOpeningMenu}
          >
            <img src={ConnectionSmall} alt="connection" />
          </button>
          {isOpenMenu && (
            <div className="dropdown">
              <ul>
                <Link to="/StreetArtMap/Profile">
                  <li
                    onClick={() => {
                      setIsOpenMenu(false);
                    }}
                    onKeyUp={() => {
                      setIsOpenMenu(false);
                    }}
                  >
                    Profil
                  </li>
                </Link>
                <Link to="/StreetArtMap">
                  <li
                    onClick={() => {
                      setIsOpenMenu(false);
                    }}
                    onKeyUp={() => {
                      setIsOpenMenu(false);
                    }}
                  >
                    Worldmap
                  </li>
                </Link>
                <Link to="/StreetArtMap/authentication">
                  <li
                    onClick={() => {
                      setUser(undefined); //logout
                      setIsOpenMenu(false); //fermer le menu au changement de page
                    }}
                    onKeyUp={() => {
                      setUser(undefined);
                      setIsOpenMenu(false);
                    }}
                  >
                    Logout
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
