// import { useContext, useEffect, useState, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./AddNewArtwork.css";
// import { toast } from "react-toastify";
// import GeocodingContext from "../../contexts/GeocodingContext";
// import LoginContext from "../../contexts/LoginContext";
// import Geocoding from "../Geocoding/Geocoding";
// import Geolocalisation from "../Geolocalisation/Geolocalisation";

// export default function AddNewArtworkFile() {
//   const [selectedType, setSelectedType] = useState("");

//   //Récupérer les informations contenus dans les contexts = geo et user
//   const { submitedAddress, searchedLoc, setSearchedLoc } =
//     useContext(GeocodingContext);
//   const { user } = useContext(LoginContext);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const fileUploadRef = useRef<HTMLInputElement>();

//   const handleImageUpload: React.MutableRefObject<HTMLInputElement | undefined> = (event) => {
//     event.preventDefault;
//     fileUploadRef.current?.click();
//   };

//   useEffect(() => {
//     return () => {
//       if (location.pathname === "/StreetArtMap/NewArtwork") {
//         setSearchedLoc(undefined);
//       }
//     };
//   }, [location.pathname, setSearchedLoc]);

//   const handleSubmit = async (event: {
//     preventDefault: () => void;
//   }) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/api/artwork`,
//         {
//           method: "post",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${user?.token}`,
//           },
//           body: JSON.stringify({}),
//         },
//       );
//       if (response.status === 200) {
//         toast.success(`Merci d'avoir ajouter le street art ${name} ! 😍`, {
//           position: window.innerWidth < 768 ? "top-left" : "bottom-right",
//         });
//         navigate("/StreetArtMap");
//       } else {
//         toast.error("Une erreur s'est produite, veuillez réessayer", {
//           position: window.innerWidth < 768 ? "top-left" : "bottom-right",
//         });
//         console.info(response);
//       }
//     } catch (error) {
//       console.error(console.error());
//     }
//   };

//   const currentDate = new Date().toISOString().split("T")[0];

//   return (
//     <form
//       action="add"
//       className="artworkForm"
//       onSubmit={handleSubmit}
//       encType="multipart/form-data"
//     >
//       <label>
//         Nom de l'oeuvre trouvé :
//         <input name="name" type="text" className="addArt" />
//       </label>
//       <label>
//         Nom de l'artiste :
//         <input name="artiste_name" type="text" className="addArt" />
//       </label>
//       <label>
//         Adresse de l'oeuvre (approximativement):
//         <Geocoding />
//         <input
//           className="addArt"
//           type="search"
//           name="address"
//           required
//           hidden
//           defaultValue={submitedAddress}
//         />
//         <div>
//           {searchedLoc !== undefined && (
//             <input
//               name="latitude"
//               type="text"
//               className="addArt"
//               hidden
//               defaultValue={searchedLoc[0]}
//             />
//           )}
//           {searchedLoc !== undefined && (
//             <input
//               name="longitude"
//               type="text"
//               className="addArt"
//               hidden
//               defaultValue={searchedLoc[1]}
//             />
//           )}
//         </div>
//         <Geolocalisation />
//       </label>
//       <label>
//         Image de l'oeuvre :
//         <input name="image" type="text" hidden ref={fileUploadRef} />
//         <input
//           name="submit_image"
//           type="submit"
//           placeholder="Add your image ..."
//           onClick={handleImageUpload}
//           className="addArt"
//         />
//       </label>
//       <label>
//         Date de la prise :
//         <input
//           name="picture_date"
//           type="date"
//           className="addArt"
//           defaultValue={currentDate}
//         />
//       </label>
//       <label>
//         Type de Street Art :
//         <select
//           name="type_of_art"
//           onChange={(event) => {
//             setSelectedType(event.target.value);
//           }}
//           className="addType"
//           value={selectedType}
//         >
//           <option value="" key="option">
//             Choisissez le type de l'oeuvre
//           </option>
//           <option value="sticker">Sticker ou affiche</option>
//           <option value="wall painting">Wall painting</option>
//           <option value="stencil">Pochoir</option>
//           <option value="tag">Tag/bombe à peinture</option>
//           <option value="other">Autre</option>
//         </select>
//       </label>
//       <label>
//         Auteur de la photo :
//         <input
//           name="picture_credit"
//           type="text"
//           className="addArt"
//           defaultValue={user?.user.pseudo}
//         />
//       </label>
//       <button type="submit" defaultValue="Ajout" className="add-btn">
//         Ajouter
//       </button>
//     </form>
//   );
// }
