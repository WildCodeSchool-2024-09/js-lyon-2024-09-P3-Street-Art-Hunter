import { useRef, useState } from "react";
import type { ChangeEventHandler, FormEventHandler } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ToasterSuccess } from "../../services/ToasterFunctions";

interface SignUpProps {
  setIsRegistered: (boolean: boolean) => void;
  isRegistered: boolean;
}

function SignUp({ setIsRegistered }: SignUpProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const pseudoRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: (emailRef.current as HTMLInputElement).value,
            password,
            pseudo: (pseudoRef.current as HTMLInputElement).value,
          }),
        },
      );

      if (response.status === 201) {
        setIsRegistered(true);
        ToasterSuccess(
          `Bienvenue à bord, ${pseudoRef.current?.value} ! L'aventure Street Art commence maintenant ! 🌟`,
          theme,
        );
        // navigate("/StreetArtMap");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="pseudo" className="form-label">
        Pseudo :
        <input
          className="form-input"
          ref={pseudoRef}
          type="pseudo"
          id="pseudo"
        />
      </label>
      <label htmlFor="email" className="form-label">
        Email :
        <input className="form-input" ref={emailRef} type="email" id="email" />
      </label>
      <label htmlFor="password" className="form-label">
        Mot de passe :
        <input
          className="form-input"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label htmlFor="confirm-password" className="form-label">
        Confirmez votre mot de passe :
        <input
          className="form-input"
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </label>
      <input
        className="submit-button"
        type="submit"
        name="Send"
        value="S'inscrire"
      />
    </form>
  );
}

export default SignUp;
