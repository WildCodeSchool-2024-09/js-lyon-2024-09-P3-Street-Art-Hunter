import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AjoutArt from "../../assets/images/add_picture.png";
import Connexion from "../../assets/images/connec_ash.png";
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
      position: window.innerWidth < 768 ? "top-left" : "bottom-right",
    });

  const handleClickLogOut = () => {
    setUser(undefined); //logout
    notify();
    setIsOpenMenu(false); //fermer le menu au changement de page
  };

  return (
    <>
      {user === undefined ? (
        <div className="navbar-icon box-divider">
          <hr className="vertical-divider" />
          <Link to="/StreetArtMap/authentication">
            <img
              src={Connexion}
              alt="connection"
              className="disconnected_user"
            />
          </Link>
          <hr className="vertical-divider" />
        </div>
      ) : (
        <div className="navbar-icon box-divider">
          <hr className="vertical-divider" />
          <Link
            to="/StreetArtMap/NewArtwork"
            onClick={() => setIsOpenMenu(false)}
            // au cas où l'utilisateur ne ferme pas le menu et appuie sur une autre icône
          >
            <img src={AjoutArt} alt="ajout d'une oeuvre" />
          </Link>
          <hr />
          <button
            type="button"
            className="dropdown-btn"
            onClick={handleOpeningMenu}
          >
            <img src={Connexion} alt="connection" />
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
                <Link to="/StreetArtMap/authentication">
                  <li
                    onClick={handleClickLogOut}
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
