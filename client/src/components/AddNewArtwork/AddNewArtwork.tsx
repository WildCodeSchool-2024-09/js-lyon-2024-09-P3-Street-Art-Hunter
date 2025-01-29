import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewArtwork.css";
import { toast } from "react-toastify";
import GeocodingContext from "../../contexts/GeocodingContext";
import LoginContext from "../../contexts/LoginContext";
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
      const address = formData.get("add ress") as string;
      const image = formData.get("image") as string;
      const picture_date = formData.get("picture_date") as string;
      const type_of_art = formData.get("type_of_art") as string;
      const latitude = formData.get("latitude") as string;
      const longitude = formData.get("longitude") as string;
      const picture_credit = formData.get("picture_credit") as string;

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
          }),
        },
      );
      if (response.status === 200) {
        toast.success(`Merci d'avoir ajouter le street art ${name} ! 😍`, {
          position: window.innerWidth < 768 ? "top-left" : "bottom-right",
        });
        navigate("/StreetArtMap");
      } else {
        toast.error("Une erreur s'est produite, veuillez réessayer", {
          position: window.innerWidth < 768 ? "top-left" : "bottom-right",
        });
        console.info(response);
      }
    } catch (error) {
      console.error(console.error());
    }
  };

  return (
    <form action="add" className="artworkForm" onSubmit={handleSubmit}>
      <label>
        Nom de l'oeuvre trouvé :
        <input name="name" type="text" className="addArt" />
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
        <input name="picture_date" type="text" className="addArt" />
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
          <option value="paint">Peinture à la bomb</option>
          <option value="tag">Tag</option>
          <option value="other">Autre</option>
        </select>
      </label>
      <label>
        Auteur de la photo :
        <input name="picture_credit" type="text" className="addArt" />
      </label>
      <button type="submit" defaultValue="Ajout" className="add-btn">
        Ajouter
      </button>
    </form>
  );
}
