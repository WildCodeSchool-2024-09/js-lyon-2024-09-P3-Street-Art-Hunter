import "./Footer.css";
import { Link } from "react-router-dom";
import GitHub from "../../assets/icones/github-mark-white.svg";
import GithubBlack from "../../assets/icones/github_black.png";
import { useTheme } from "../../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
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
        <img
          src={theme === "light" ? GithubBlack : GitHub}
          alt="gitHub"
          className="logoGitHub"
        />
      </a>
    </section>
  );
}
