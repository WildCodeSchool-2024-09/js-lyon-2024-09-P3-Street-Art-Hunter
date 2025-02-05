import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./AuthPage.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";

function AuthPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <Link
        to="/"
        className="link-logo"
        aria-label="Retour à la page d'accueil"
      >
        <img src={Logo} alt="Logo Citycanvas" className="narrow-logo" />
      </Link>
      <section className="authpage">
        <h1>{isRegistered ? "Inscription" : "Connexion"}</h1>
        {isRegistered ? (
          <SignUp setIsRegistered={setIsRegistered} />
        ) : (
          <SignIn />
        )}
        <article className="btn-section">
          {isRegistered ? (
            <button
              type="button"
              className="signin-btn"
              onClick={() => setIsRegistered(false)}
            >
              J'ai déjà un compte
            </button>
          ) : (
            <button
              type="button"
              className="signup-btn"
              onClick={() => setIsRegistered(true)}
            >
              S'inscrire
            </button>
          )}
        </article>
      </section>
    </>
  );
}

export default AuthPage;
