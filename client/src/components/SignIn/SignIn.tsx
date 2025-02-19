import "./SignIn.css";
import { useContext, useRef } from "react";
import type { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import "../../contexts/LoginContext";
import LoginContext from "../../contexts/LoginContext";
import { useTheme } from "../../contexts/ThemeContext";
import { ToasterError, ToasterSuccess } from "../../services/ToasterFunctions";

function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setUser } = useContext(LoginContext);
  const { theme } = useTheme();

  // Hook pour la navigation
  const navigate = useNavigate();

  // Gestionnaire de soumission du formulaire
  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email:
              /* rendering process ensures the ref is defined before the form is submitted */
              (emailRef.current as HTMLInputElement).value,
            password:
              /* rendering process ensures the ref is defined before the form is submitted */
              (passwordRef.current as HTMLInputElement).value,
          }),
        },
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        const loggedUser = await response.json();
        setUser(loggedUser);
        ToasterSuccess(
          `Bienvenue, ${loggedUser.user.pseudo} ! City Canvas n’attendait plus que toi ! 😍🔥`,
          theme,
        );

        navigate("/StreetArtMap");
      } else {
        ToasterError(
          "Aïe ! Un hic technique… mais pas de panique, réessaye ! 💻🔥",
          theme,
        );
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="form-label">
        Email
        <input ref={emailRef} type="email" id="email" className="form-input" />
      </label>
      <label htmlFor="password" className="form-label">
        Password
        <input
          ref={passwordRef}
          type="password"
          id="password"
          className="form-input"
        />
      </label>
      <input
        type="submit"
        className="submit-button"
        name="Send"
        value="Connexion"
      />
    </form>
  );
}

export default SignIn;
