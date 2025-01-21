import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./AuthPage.css";

function AuthPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <div className="authpage">
        {isRegistered ? <SignUp /> : <SignIn />}
        <div className="btn-section">
          <button type="button" onClick={() => setIsRegistered(true)}>
            S'inscrire
          </button>
          <button type="button" onClick={() => setIsRegistered(false)}>
            J'ai déjà un compte
          </button>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
