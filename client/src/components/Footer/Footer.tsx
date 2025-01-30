import "./Footer.css";
import { Link } from "react-router-dom";
import gitHub from "../../assets/icones/github-mark-white.svg";

export default function Footer() {
  return (
    <section className="footer">
      <p>Créé par City Canvas </p>
      <Link to="/StreetArtMap/TermsAndConditions">
        <p>Condition Générales Utilisation</p>
      </Link>
      <Link to="/StreetArtMap/PrivacyPolicy">
        <p>Protection des Données</p>
      </Link>
      <p>
        Retrouvez nous sur
        <a
          href="https://github.com/WildCodeSchool-2024-09/js-lyon-2024-09-P3-Street-Art-Hunter"
          className="github"
        >
          <img src={gitHub} alt="gitHub" className="logoGitHub" />
        </a>
      </p>
    </section>
  );
}
