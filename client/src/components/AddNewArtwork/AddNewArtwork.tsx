import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewArtwork.css";
import GeocodingContext from "../../contexts/GeocodingContext";
import LoginContext from "../../contexts/LoginContext";
import {
  ToasterError,
  ToasterSucess,
  ToasterWarning,
} from "../../services/ToasterFunctions";
import Geocoding from "../Geocoding/Geocoding";
import Geolocalisation from "../Geolocalisation/Geolocalisation";

export default function AddNewArtwork() {
  const [selectedType, setSelectedType] = useState("");

  //Récupérer les informations contenus dans les contexts = geo et user
  const { submitedAddress, searchedLoc } = useContext(GeocodingContext);
  const { user } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name") as string;
      const artist_name = formData.get("artist_name") as string;
      const address = formData.get("address") as string;
      const image = formData.get("image") as string;
      const picture_date = formData.get("picture_date") as string;
      const type_of_art = formData.get("type_of_art") as string;
      const latitude = formData.get("latitude") as string;
      const longitude = formData.get("longitude") as string;
      const picture_credit = formData.get("picture_credit") as string;

      //gestion des erreurs sur l'import d'une nouvelle oeuvre
      if (
        name.length < 5 ||
        address.length < 5 ||
        image.length < 10 ||
        latitude === null ||
        longitude === null ||
        picture_credit === null
      ) {
        ToasterWarning("Veuillez remplir tous les champs !");
        return Error;
      }

      if (picture_date === null) {
        ToasterWarning(
          "Veuillez remplir le champ avec une date au format AAAAMMJJ",
        );
        return Error;
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/artwork`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify({
            name,
            address,
            image,
            picture_date,
            type_of_art,
            latitude,
            longitude,
            picture_credit,
            artist_name,
          }),
        },
      );
      if (response.status === 200) {
        ToasterSucess(`Merci d'avoir ajouter le street art ${name} ! 😍`);

        navigate("/StreetArtMap");
      } else {
        ToasterError("Une erreur s'est produite, veuillez réessayer");
        console.info(response);
      }
    } catch (error) {
      console.error(console.error());
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <form action="add" className="artworkForm" onSubmit={handleSubmit}>
      <label>
        Nom de l'oeuvre trouvé :
        <input name="name" type="text" className="addArt" />
      </label>
      <label>
        Nom de l'artiste :
        <input name="artiste_name" type="text" className="addArt" />
      </label>
      <label>
        Adresse de l'oeuvre (approximativement):
        <Geocoding />
        <input
          className="addArt"
          type="search"
          name="address"
          required
          hidden
          defaultValue={submitedAddress}
          aria-label="ajouter une nouvelle oeuvre"
        />
        <div>
          {searchedLoc !== undefined && (
            <input
              name="latitude"
              type="text"
              className="addArt"
              hidden
              defaultValue={searchedLoc[0]}
            />
          )}
          {searchedLoc !== undefined && (
            <input
              name="longitude"
              type="text"
              className="addArt"
              hidden
              defaultValue={searchedLoc[1]}
            />
          )}
        </div>
        <Geolocalisation />
      </label>
      <label>
        Photo de l'oeuvre :
        <input name="image" type="text" className="addArt" />
      </label>
      <label>
        Date de la prise :
        <input
          name="picture_date"
          type="date"
          className="addArt"
          defaultValue={currentDate}
        />
      </label>
      <label>
        Type de Street Art :
        <select
          name="type_of_art"
          onChange={(event) => {
            setSelectedType(event.target.value);
          }}
          className="addType"
          value={selectedType}
        >
          <option value="" key="option">
            Choisissez le type de l'oeuvre
          </option>
          <option value="sticker">Sticker ou affiche</option>
          <option value="wall painting">Wall painting</option>
          <option value="stencil">Pochoir</option>
          <option value="tag">Tag/bombe à peinture</option>
          <option value="other">Autre</option>
        </select>
      </label>
      <label>
        Auteur de la photo :
        <input
          name="picture_credit"
          type="text"
          className="addArt"
          defaultValue={user?.user.pseudo}
        />
      </label>
      <button type="submit" defaultValue="Ajout" className="add-btn">
        Ajouter
      </button>
    </form>
  );
}
