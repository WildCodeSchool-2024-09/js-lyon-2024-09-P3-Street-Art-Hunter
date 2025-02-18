import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./StreetArt.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cc_logo_spotless_mustard.png";

interface ArtworkProps {
  id: number;
  name: string;
  address: string;
  image: string;
  picture_date: string;
  type_of_art: string;
  coordinates: [number, number];
  picture_credit: string;
  artist: string;
  creation_date: string;
}

const StreetArt = () => {
  const [artwork, setArtwork] = useState<ArtworkProps | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/artwork/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtwork(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const navigate = useNavigate();

  const handleClickBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/StreetArtMap");
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
      <button type="button" onClick={handleClickBack} className="back-btn">
        Revenir à la carte
      </button>
      <section className="artwork-section">
        <h1 className="artwork_details"> Détail de l'oeuvre </h1>
        {artwork !== null ? (
          <article key={artwork.id} className="artwork-container">
            <img
              className="artwork-img"
              src={artwork.image}
              alt={artwork.name}
            />
            <div className="container-details">
              <h2>{artwork.name} </h2>
              <div className="infos">
                <h3> Artiste </h3>
                <p> {artwork.artist} </p>
              </div>
              <div className="infos">
                <h3> Date de création </h3>
                <p> {artwork.creation_date} </p>
              </div>
              <div className="infos">
                <h3> Adresse </h3>
                <p> {artwork.address} </p>
              </div>
              <div className="infos">
                <h3> Coordonnées géographique </h3>
                <p> {artwork.coordinates} </p>
              </div>
              <div className="infos">
                <h3> Type de l'oeuvre </h3>
                <p> {artwork.type_of_art} </p>
              </div>
              <div className="infos">
                <h3> Photographe </h3>
                <p> {artwork.picture_credit} </p>
              </div>
              <div className="infos">
                <h3> Date </h3>
                <p> {artwork.picture_date} </p>
              </div>
            </div>
          </article>
        ) : (
          <p>pas de reponse </p>
        )}
      </section>
    </>
  );
};
export default StreetArt;
