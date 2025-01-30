import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      .then((data) => setArtwork(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <aside>
      {artwork !== null ? (
        <article>
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
    </aside>
  );
};
export default StreetArt;
