import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";

function PrivacyPolicy() {
  return (
    <>
      <Link
        to="/"
        className="link-logo"
        aria-label="Retour à la page d'accueil"
      >
        <img src={Logo} alt="Logo Citycanvas" className="narrow-logo" />
      </Link>
      <h1 className="privacy-title">Protection des données</h1>
      <article className="privacy-container">
        <h2>1. Introduction</h2>
        <p>
          Nous accordons une grande importance à la protection de vos données
          personnelles. Cette politique explique quelles informations nous
          collectons, comment nous les utilisons et quels sont vos droits.
        </p>
        <h2>2. Données collectées</h2>
        <p>Nous collectons les types de données suivants :</p>
        <ul>
          <li>
            - Informations fournies directement par l'utilisateur (nom, email,
            photo de profil lors de la création d'un compte).
          </li>
          <li> - Données de navigation et cookies.</li>
          <li>
            - Données de géolocalisation lorsque l'utilisateur utilise la
            fonctionnalité de localisation des œuvres.
          </li>
        </ul>
        <h2>3. Utilisation des données</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li> - Fournir et améliorer les services de CityCanvas. </li>
          <li>- Afficher les œuvres de street art proches de l'utilisateur.</li>
          <li>
            - Permettre l'ajout de nouvelles œuvres via la géolocalisation.
          </li>
          <li> - Assurer la sécurité du site et prévenir les abus.</li>
          <li> - Répondre aux demandes des utilisateurs.</li>
        </ul>
        <h2>4. Partage des données</h2>
        <p>
          Nous ne partageons pas vos données avec des tiers, sauf dans les cas
          suivants :
        </p>
        <ul>
          <li>
            - Lorsque vous publiez une œuvre, certaines informations (ex.
            pseudonyme, photo de l'œuvre, localisation approximative) peuvent
            être accessibles aux autres utilisateurs.{" "}
          </li>
          <li> - En cas d'obligation légale ou sur demande des autorités.</li>
        </ul>
        <h2>5. Conservation des données</h2>
        <p>
          Vos données sont conservées aussi longtemps que nécessaire pour
          fournir nos services ou respecter nos obligations légales. Vous pouvez
          demander la suppression de votre compte et de vos données à tout
          moment.
        </p>
        <h2>6. Vos droits</h2>
        <p>
          Conformément à la réglementation en vigueur, vous avez le droit
          d'accéder, de rectifier et de supprimer vos données, ainsi que de
          limiter ou de vous opposer à leur traitement.
        </p>
        <h2>7. Géolocalisation</h2>
        <p>
          L'utilisation de la géolocalisation est facultative. Vous pouvez
          désactiver cette fonctionnalité dans les paramètres de votre appareil.
          Toutefois, certaines fonctions de CityCanvas peuvent ne pas être
          pleinement accessibles sans la géolocalisation.
        </p>
        <h2>8. Sécurité des données</h2>
        <p>
          Nous mettons en place des mesures de sécurité techniques et
          organisationnelles pour protéger vos données contre l'accès non
          autorisé, la perte ou l'altération.
        </p>
        <h2>9. Contact</h2>
        <p>
          Pour toute question relative à la protection des données, vous pouvez
          nous contacter à citycanvas@gmail.com
        </p>
      </article>
    </>
  );
}

export default PrivacyPolicy;
