import "./AddNewArtwork.css";
// import Geolocalisation from "../Geolocalisation/Geolocalisation";
// import { useState } from "react";

export default function AddNewArtwork() {
  //   const [enteredAddress, setEnteredAddress] = useState<string>("");

  //   const handleImageUpload = (event) => {
  //     event.preventDefault();
  //   };

  return (
    <section className="sct_add_form">
      <form
        action="add"
        className="artworkForm"
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const name = formData.get("name") as string;
          const address = formData.get("adress") as string;
          const image = formData.get("image") as string;
          const picture_date = formData.get("picture_date") as string;
          const type_of_art = formData.get("type_of_art") as string;
          const latitude = formData.get("latitude") as string;
          const longitude = formData.get("longitude") as string;
          const picture_credit = formData.get("picture_credit") as string;

          fetch(`${import.meta.env.VITE_API_URL}/api/artwork`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
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
          })
            .then((res) => res.json())
            .then((data) => console.info(data));
        }}
      >
        <label>
          Nom de l'oeuvre trouvé :
          <input
            name="name"
            type="text"
            placeholder="Nom de l'oeuvre"
            className="addCity"
          />
        </label>
        <label>
          Adresse de l'oeuvre (approximativement):
          <input
            className="addCity"
            type="search"
            name="address"
            placeholder="Recherchez l'addre de l'oeuvre..."
            required
            // onChange={(e) => {
            //   setEnteredAddress(e.target.value);
            // }}
          />
        </label>
        <label>
          Photo de l'oeuvre :
          <input
            name="image"
            type="text"
            placeholder="Photo de l'oeuvre"
            className="addCity"
          />
        </label>
        {/* <label>
//   Image de l'oeuvre :
//   <input name="image" type="file" hidden />
//   <input
//     name="image_of_art"
//     type="submit"
//     placeholder="Add your image ..."
//     className="addCity"
//     onClick={handleImageUpload}
//   />
// </label> */}
        <label>
          Date de la prise :
          <input
            name="picture_date"
            type="text"
            placeholder="Date de la Photo"
            className="addCity"
          />
        </label>
        <label>
          Type de Street Art :
          <input
            name="type_of_art"
            type="text"
            placeholder="Tag, wall painting, sticker ..."
            className="addCity"
          />
        </label>
        <label>
          Localisation :
          <input
            name="latitude"
            type="text"
            placeholder="latitude"
            className="addCity"
          />
          <input
            name="longitude"
            type="text"
            placeholder="longitude"
            className="addCity"
          />
          {/* <Geolocalisation /> */}
        </label>
        <label>
          Auteur de la photo :
          <input
            name="picture_credit"
            type="text"
            placeholder="Votre id"
            className="addCity"
          />
        </label>
        <button type="submit" defaultValue="Ajout" className="search-btn">
          Ajouter
        </button>
      </form>
    </section>
  );
}
