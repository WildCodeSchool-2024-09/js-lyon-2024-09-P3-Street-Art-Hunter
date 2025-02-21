import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";
import LoginContext from "../../contexts/LoginContext";
import { useTheme } from "../../contexts/ThemeContext";
import { ToasterError, ToasterSuccess } from "../../services/ToasterFunctions";

interface UserProps {
  id: number | null;
  pseudo: string;
  email: string;
  hashed_password: string;
  inscription_date: string;
  profile_picture: string;
  token: string;
}

function Profile() {
  const [infoUser, setInfoUser] = useState<UserProps | null>(null);
  const { user } = useContext(LoginContext);
  const { theme } = useTheme();

  // Fetch du profil en fonction de l'ID de l'utilisateur qui est connecté
  useEffect(() => {
    if (user) {
      fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update user profile");
          }
          return response.json();
        })
        .then((data: UserProps) => {
          setInfoUser(data);
        });
    }
  }, [user]);

  // Édition de la page profil
  const updateUserProfile = (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    if (infoUser) {
      const formData = new FormData(event.currentTarget);

      const email = formData.get("mail") as string;
      const pseudo = formData.get("pseudo") as string;

      fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ email, pseudo }),
      }).then((response) => {
        if (response.status === 204) {
          ToasterSuccess(
            "Modifications réussies ! Tout est mis à jour, prêt(e) à explorer ! 😎✨",
            theme,
          );
          response.json();
        } else {
          ToasterError(
            "Oups, il y a eu un petit hic ! Un problème est survenu, réessaie un peu plus tard. 😬🔄",
            theme,
          );
        }
      });
    } else {
      ToasterError(
        "Aïe ! Un imprévu est arrivé. Pas de panique, on va régler ça ! 🔧",
        theme,
      );
    }
  };

  return (
    <>
      <Link
        to="/"
        className="link-logo"
        aria-label="Retour à la page d'accueil"
      >
        <img src={Logo} alt="Logo Citycanvas" className="narrow-logo" />
      </Link>
      <section className="profile-sct">
        {infoUser ? (
          <>
            <h1>Profil</h1>
            <img
              src={
                infoUser?.profile_picture ||
                "https://avatar.iran.liara.run/public"
              }
              alt="avatar d'une fille"
            />
            <form className="profile-detail" onSubmit={updateUserProfile}>
              <label className="user_label">
                Pseudo
                <input
                  aria-label="modifie ton pseudo"
                  id="profile-edit-pseudo"
                  name="pseudo"
                  defaultValue={infoUser.pseudo}
                />
              </label>
              <label className="user_label profile_label">
                Mail
                <input
                  aria-label="modifie ton adresse mail"
                  id="profile-edit-mail"
                  name="mail"
                  defaultValue={infoUser.email}
                />
              </label>
              <div className="user_label profile_label">
                Date d'inscription
                <p id="profile-date">
                  {new Date(infoUser.inscription_date).toLocaleDateString()}
                </p>
              </div>
              <button className="save-btn" type="submit">
                Enregistrer
              </button>
            </form>
          </>
        ) : (
          <p>Chargement des données...</p>
        )}
      </section>
    </>
  );
}

export default Profile;
