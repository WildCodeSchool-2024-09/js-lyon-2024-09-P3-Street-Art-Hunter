import "./Footer.css";
import gitHub from "../../assets/icones/github-mark-white.svg";

export default function Footer() {
  return (
    <section className="footer">
      <p>Créé par City Canvas </p>
      <p>Condition Générales Utilisation</p>
      <p>Protection des Données</p>
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
