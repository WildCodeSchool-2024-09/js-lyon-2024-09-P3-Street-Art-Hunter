import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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
  const notify = () =>
    toast.success("Reviens vite !", {
      className: "toast-message",
    });

  return (
    <>
      {user === undefined ? (
        <div className="navbar-icon box-divider">
          <hr className="vertical-divider" />
          <img src={Leadboard} alt="leadboard" />
          <hr />
          <Link to="/StreetArtMap/authentication">
            <img
              src={Connection}
              alt="connection"
              className="disconnected_user"
            />
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
          <button
            type="button"
            className="dropdown-btn"
            onClick={handleOpeningMenu}
          >
            <img src={Connection} alt="connection" />
          </button>
          <hr className="vertical-divider" />
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
                    Carte Street Art
                  </li>
                </Link>
                <Link onClick={notify} to="/StreetArtMap/authentication">
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
                    Déconnexion
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
