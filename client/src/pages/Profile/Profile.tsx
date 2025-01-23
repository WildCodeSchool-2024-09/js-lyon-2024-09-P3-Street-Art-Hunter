import "./Profile.css";
import { useEffect, useState } from "react";
import avatar from "../../assets/images/girl_profile.png";

interface UserProps {
  id: number | null;
  pseudo: string;
  email: string;
  hashed_password: string;
  inscription_date: string;
}

function Profile() {
  const [infoUser, setInfoUser] = useState<UserProps | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/3`)
      .then((response) => response.json())
      .then((data: UserProps) => {
        setInfoUser(data);
      });
  }, []);

  return (
    <div className="profile-sct">
      {infoUser ? (
        <>
          <h1>Profil</h1>
          <img src={avatar} alt="avatar d'une fille" />
          <div className="profile-detail">
            <h3>Pseudo</h3>
            <p>{infoUser.pseudo}</p>
          </div>
          <div className="profile-detail">
            <h3>Mail</h3>
            <p>{infoUser.email}</p>
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
        </>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default Profile;
