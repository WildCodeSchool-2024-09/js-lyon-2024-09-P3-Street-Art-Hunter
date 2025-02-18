import "./Footer.css";
import { Link } from "react-router-dom";
import gitHub from "../../assets/icones/github-mark-white.svg";

export default function Footer() {
  return (
    <section className="footer">
      <p>Créé par City Canvas </p>
      <Link to="/StreetArtMap/TermsAndConditions">
        Condition Générales Utilisation
      </Link>
      <Link to="/StreetArtMap/PrivacyPolicy">Protection des Données</Link>
      <a
        href="https://github.com/WildCodeSchool-2024-09/js-lyon-2024-09-P3-Street-Art-Hunter"
        className="github"
        target="_blank"
        rel="noreferrer"
      >
        Retrouvez nous sur
        <img src={gitHub} alt="gitHub" className="logoGitHub" />
      </a>
    </section>
  );
}
