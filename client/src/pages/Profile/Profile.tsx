import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
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

  const pseudoRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);

  // Fetch du profil en fonction de l'ID de l'utilisateur qui est connecté
  useEffect(() => {
    if (user?.user.id) {
      fetch(`${import.meta.env.VITE_API_URL}/api/users/${user.user.id}`)
        .then((response) => response.json())
        .then((data: UserProps) => {
          setInfoUser(data);
        });
    }
  }, [user?.user.id]);

  // fetch pour l'edition de la page profil
  const updateUserProfile = () => {
    if (infoUser) {
      fetch(`${import.meta.env.VITE_API_URL}/api/users/${infoUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(infoUser),
      }).then((response) => {
        if (response.status === 204) {
        }
      });
      toast.success("Modifications enregistrées ! 🙂");
    } else {
      toast.error("Un problème est survenu");
    }
  };

  return (
    <div className="profile-sct">
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
          <div className="profile-detail">
            <h3>Pseudo</h3>
            <input
              aria-label="modifie ton pseudo"
              id="profile-edit-pseudo"
              ref={pseudoRef}
              value={infoUser.pseudo}
              onChange={(e) =>
                setInfoUser({ ...infoUser, pseudo: e.target.value })
              }
            />
          </div>
          <div className="profile-detail">
            <h3>Mail</h3>
            <input
              aria-label="modifie ton adresse mail"
              id="profile-edit-pseudo"
              ref={mailRef}
              value={infoUser.email}
              onChange={(e) =>
                setInfoUser({ ...infoUser, email: e.target.value })
              }
            />
          </div>
          <div className="profile-detail">
            <h3>Mot de passe</h3>
            <p>●●●●●●●</p>
          </div>
          <div className="profile-detail">
            <h3>Date d'inscription</h3>
            <p>{new Date(infoUser.inscription_date).toLocaleDateString()}</p>
            {/*Formatage de la date pour l'afficher correctement}*/}
          </div>
          <button
            className="save-btn"
            type="button"
            onClick={updateUserProfile}
          >
            Enregistrer
          </button>
        </>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default Profile;
