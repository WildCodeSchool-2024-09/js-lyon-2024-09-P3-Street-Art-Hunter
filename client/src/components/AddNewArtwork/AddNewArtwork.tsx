import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewArtwork.css";
import GeocodingContext from "../../contexts/GeocodingContext";
import LoginContext from "../../contexts/LoginContext";
import { useTheme } from "../../contexts/ThemeContext";
import {
  ToasterError,
  ToasterSuccess,
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

  const { theme } = useTheme();

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

      //gestion des erreurs de saisie sur l'import d'une nouvelle oeuvre
      if (
        name.length < 4 ||
        address.length < 4 ||
        image.length < 15 ||
        latitude === null ||
        longitude === null ||
        picture_credit === null
      ) {
        ToasterWarning(
          "Oups ! Il manque des infos… Remplis tous les champs pour continuer ! 😬✍️",
          theme,
        );
        return Error;
      }

      if (picture_date === null) {
        ToasterWarning(
          "Petit bug temporel ! Ajoute une date valide (AAAAMMJJ) pour avancer. 🚀",
          theme,
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
        ToasterSuccess(
          `Boom ! ${name} 😍 est maintenant sur la carte ! T’es un vrai chasseur de Street Art ! 🚀`,
          theme,
        );

        navigate("/StreetArtMap");
      } else {
        ToasterError(
          "Oups… petit hic ! Une erreur s’est glissée. Réessaie et tout devrait rouler ! 🤞😬",
          theme,
        );
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
        <input name="image" type="url" className="addArt" />
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
