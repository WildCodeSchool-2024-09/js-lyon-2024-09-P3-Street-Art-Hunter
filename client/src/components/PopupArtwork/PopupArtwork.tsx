import { useEffect, useState } from "react";

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

interface PopupProps {
  setTriggerPopup: (index: boolean) => void;
  triggerPopup: boolean;
  id: number;
}

const PopupArtwork = ({ setTriggerPopup, triggerPopup, id }: PopupProps) => {
  const [artwork, setArtwork] = useState<ArtworkProps | null>(null);

  useEffect(() => {
    if (id !== -1) {
      fetch(`${import.meta.env.VITE_API_URL}/api/artwork/${id}`)
        .then((res) => res.json())
        .then((data) => setArtwork(data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  return triggerPopup ? (
    <div>
      {artwork !== null ? (
        <article>
          <button type="button" onClick={() => setTriggerPopup(false)}>
            X
          </button>
          <section key={artwork.id}>
            <h1>{artwork.name} </h1>
            <img src={artwork.image} alt={artwork.name} />
            <h2> Détail de l'oeuvre </h2>
            <div>
              <h3> Artiste </h3>
              <p> {artwork.artist} </p>
            </div>
            <div>
              <h3> Date de création </h3>
              <p> {artwork.creation_date} </p>
            </div>
            <div>
              <h3> Adresse </h3>
              <p> {artwork.address} </p>
            </div>
            <div>
              <h3> Coordonnées géographique </h3>
              <p> {artwork.coordinates} </p>
            </div>
            <div>
              <h3> Type de l'oeuvre </h3>
              <p> {artwork.type_of_art} </p>
            </div>
            <div>
              <h3> Photographe </h3>
              <p> {artwork.picture_credit} </p>
            </div>
            <div>
              <h3> Date </h3>
              <p> {artwork.picture_date} </p>
            </div>
          </section>
        </article>
      ) : (
        <p>pas de reponse </p>
      )}
    </div>
  ) : null;
};
export default PopupArtwork;
