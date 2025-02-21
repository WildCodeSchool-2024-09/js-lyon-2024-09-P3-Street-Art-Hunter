import AddNewArtwork from "../../components/AddNewArtwork/AddNewArtwork";
import "./NewArtwork.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";
import LoginContext from "../../contexts/LoginContext";

export default function NewArtwork() {
  const { user } = useContext(LoginContext);

  return (
    <>
      <Link
        to="/"
        className="link-logo"
        aria-label="Retour à la page d'accueil"
      >
        <img src={Logo} alt="Logo Citycanvas" className="narrow-logo" />
      </Link>
      <section className="add_artwork">
        <article className="presentation_add">
          <h1>Trésor trouvé !</h1>
          <p>
            La rue regorge de trésors et nous sommes toujours heureux de pouvoir
            en recommander un de plus à notre communauté.
          </p>
        </article>
        {user ? (
          <>
            <p className="welcome_add">
              Remplis le formulaire ci-dessous pour l'ajouter à notre répertoire
              et en faire profiter tous les autres curieux.
            </p>
            <AddNewArtwork />
            <p className="thankyou">Merci pour ta contribution.</p>
          </>
        ) : (
          <article className="error_add">
            <h2>Oups ...</h2>
            <h3>Connectez vous pour pouvoir ajouter un Street Art !</h3>
          </article>
        )}
      </section>
    </>
  );
}
