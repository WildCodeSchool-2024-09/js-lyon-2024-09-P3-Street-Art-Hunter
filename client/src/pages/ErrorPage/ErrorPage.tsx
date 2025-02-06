import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";
import DistSearch from "../../components/DistSearch/DistSearch";
import "./ErrorPage.css";

export default function ErrorPage() {
  const conponentLoc = "section_error";
  return (
    <>
      <Link
        to="/"
        className="link-logo"
        aria-label="Retour à la page d'accueil"
      >
        <img src={Logo} alt="Logo Citycanvas" className="narrow-logo" />
      </Link>
      <section className="error-section">
        <h1>Erreur</h1>
        <p>Aucune information n'a été trouvé à cette adresse.</p>
        <p>Êtes vous sûr de l'avoir bien saisie ?</p>
        <h2>Tentez une nouvelle recherche :</h2>
        <DistSearch componentLoc={conponentLoc} />
      </section>
    </>
  );
}
