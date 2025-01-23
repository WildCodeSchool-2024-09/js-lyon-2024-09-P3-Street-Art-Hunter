import "./Profile.css";
import avatar from "../../assets/images/girl_profile.png";

function Profile() {
  return (
    <div>
      <h1>Profil</h1>
      <img src={avatar} alt="avatar d'une fille" />
      <hgroup>
        <h3>Pseudo</h3>
        <p>Jane Doe</p>
      </hgroup>
      <hgroup>
        <h3>Mail</h3>
        <p>janedoe@example.com</p>
      </hgroup>
      <hgroup>
        <h3>Mot de passe</h3>
        <p>●●●●●●●</p>
      </hgroup>
      <hgroup>
        <h3>Date d'inscription</h3>
        <p>2025 - 01 - 01</p>
      </hgroup>
    </div>
  );
}

export default Profile;
