import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AjoutArt from "../../assets/images/add_picture.png";
import AjoutArtDark from "../../assets/images/add_picture_dark.png";
import Connexion from "../../assets/images/connec_ash.png";
import ConnexionDark from "../../assets/images/connec_dark.png";
import LoginContext from "../../contexts/LoginContext";
import { useTheme } from "../../contexts/ThemeContext";
import { ToasterInformation } from "../../services/ToasterFunctions";

export default function Navbar() {
  const { user, setUser } = useContext(LoginContext);
  const { theme } = useTheme();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Burger menu qui s'ouvre au survol surement en grand écran
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsOpenMenu(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsOpenMenu(false);
    }
  };

  const handleClickLogOut = () => {
    setUser(undefined);
    ToasterInformation(
      "Hey, ne reste pas trop loin ! Le Street Art t'attend ! 🎨✨",
      theme,
    );
    setIsOpenMenu(false);
  };

  return (
    <>
      {user === undefined ? (
        <div className="navbar-icon box-divider">
          <hr className="vertical-divider" />
          <Link to="/StreetArtMap/authentication">
            <img
              src={theme === "light" ? ConnexionDark : Connexion}
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
            <img
              src={theme === "light" ? AjoutArtDark : AjoutArt}
              alt="ajout d'une oeuvre"
            />
          </Link>
          <hr />
          <button
            type="button"
            className="dropdown-btn"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onFocus={handleMouseEnter}
          >
            <img
              src={theme === "light" ? ConnexionDark : Connexion}
              alt="connection"
            />
          </button>
          <hr className="vertical-divider" />
          {isOpenMenu && (
            <div className="dropdown" onMouseLeave={handleMouseLeave}>
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
