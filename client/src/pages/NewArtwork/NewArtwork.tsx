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
      <Link to="/" className="link-logo">
        <img src={Logo} alt="logoCC" className="narrow-logo" />
      </Link>
      <section className="add_artwork">
        <article className="presentation_add">
          <h1>Trésor trouvé !</h1>
          <p>
            La rue regorge de trésors et nous sommes toujours heureux de pouvoir
            en recommander un de plus à notre communauté. Remplissez le
            formulaire ci-dessous pour l'ajouter à notre répertoire et en faire
            profiter tous les autres curieux.
          </p>
        </article>
        {user ? (
          <AddNewArtwork />
        ) : (
          <h2>Connectez vous pour pouvoir ajouter un Street Art !</h2>
        )}
        <p className="thankyou">Merci pour votre contribution.</p>
      </section>
    </>
  );
}
