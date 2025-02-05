import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoginContext from "../../contexts/LoginContext";

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
          toast.success("Modifications enregistrées ! 🙂");
          response.json();
        }
      });
    } else {
      toast.error("Un problème est survenu");
    }
  };

  return (
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
            <label className="user_label profile_label">
              Mot de passe
              <input
                className="password-input"
                type="password"
                value="password"
                disabled
              />
            </label>
            <div className="user_label profile_label">
              Date d'inscription
              <p>{new Date(infoUser.inscription_date).toLocaleDateString()}</p>
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
  );
}

export default Profile;
