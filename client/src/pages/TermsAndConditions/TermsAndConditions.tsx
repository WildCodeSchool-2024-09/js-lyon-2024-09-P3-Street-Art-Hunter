import "./TermsAndConditions.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";

function TermsAndConditions() {
  return (
    <>
      <Link
        to="/"
        className="link-logo"
        aria-label="Retour à la page d'accueil"
      >
        <img src={Logo} alt="Logo Citycanvas" className="narrow-logo" />
      </Link>
      <h1 className="cgu-title">Conditions Générales d'Utilisations (CGU)</h1>
      <article className="cgu-container">
        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet
          de définir les conditions d'accès et d'utilisation de
          l'application CityCanvas, une plateforme permettant aux utilisateurs
          de découvrir des œuvres de street art à travers la ville et d'ajouter
          de nouvelles œuvres à la base de données via la géolocalisation.
        </p>
        <h2>2. Accès à l'application</h2>
        <p>
          L'application CityCanvas est accessible gratuitement. L'utilisateur
          doit disposer d'un appareil compatible et d'une connexion internet.
          Certaines fonctionnalités, comme l'ajout d'œuvres, peuvent nécessiter
          la création d'un compte utilisateur.
        </p>
        <h2>3. Inscription et compte utilisateur</h2>
        <p>
          L'inscription sur CityCanvas est facultative pour la consultation des
          œuvres, mais obligatoire pour contribuer à la base de données.
          L'utilisateur s'engage à fournir des informations exactes et à ne pas
          usurper l'identité d'un tiers.
        </p>
        <h2>4. Responsabilités de l'utilisateur</h2>
        <p>
          L'utilisateur s'engage à : Respecter la législation en vigueur et les
          droits des tiers. Ne pas publier de contenus inappropriés, offensants
          ou contraires à l'ordre public. Fournir des informations exactes
          concernant la localisation et les caractéristiques des œuvres
          ajoutées.
        </p>
        <h2>5. Propriété intellectuelle</h2>
        <p>
          Les contenus publiés sur CityCanvas (textes, images, descriptions)
          restent la propriété de leurs auteurs respectifs. En publiant du
          contenu, l'utilisateur accorde à CityCanvas une licence non exclusive
          d'utilisation, de reproduction et de diffusion sur la plateforme.
        </p>
        <h2>6. Géolocalisation</h2>
        <p>
          L'utilisation de la géolocalisation permet d'afficher les œuvres
          autour de l'utilisateur et de faciliter l'ajout de nouvelles
          contributions. L'utilisateur accepte que son emplacement puisse être
          utilisé à cette fin, conformément à notre politique de protection des
          données.
        </p>
        <h2>7. Responsabilité de l'éditeur</h2>
        <p>
          L'équipe CityCanvas met tout en œuvre pour garantir l'exactitude des
          informations, mais ne saurait être tenue responsable en cas d'erreur,
          omission ou utilisation frauduleuse de la plateforme.
        </p>
        <h2>8. Modification des CGU</h2>
        <p>
          Nous nous réservons le droit de modifier ces CGU à tout moment. Les
          utilisateurs seront informés des changements par tout moyen approprié.
        </p>
        <h2>9. Loi applicable</h2>
        <p>
          Les présentes CGU sont soumises à la loi en vigueur dans notre
          juridiction.
        </p>
        <h2>10. Contact</h2>
        <p>
          Pour toute question, vous pouvez nous contacter à
          citycanvas@gmail.com.
        </p>
      </article>
    </>
  );
}

export default TermsAndConditions;
