// import type { ReactNode } from "react";
// import "./AddNewArtwork.css";
// import Geolocalisation from "../Geolocalisation/Geolocalisation";

// interface artworkData {
//   name: string;
//   address: string;
//   image: string;
//   type_of_art: string;
//   latitude: string;
//   longitude: string;
//   picture_credit: string;
// }

// interface AddNewArtworkProps {
//   children: ReactNode;
//   defaultValue: artworkData;
//   submitingArt: (artworkFormData: artworkData) => void;
// }

// function AddNewArtwork({
//   defaultValue,
//   submitingArt,
//   children,
// }: AddNewArtworkProps) {
//   function handleSubmit(event) {
//     event.preventDefault();

//     const artworkFormData = new FormData(event.currentTarget);

//     submitingArt(artworkFormData);
//   }
//   return (
//     <section className="sct_add_form">
//       <form action="add" className="artworkForm" onSubmit={handleSubmit}>
//         {/* Intégrer les props et faire la fonction du onSubmit qui va enregistrer les données dans une variable */}
//         <label>
//           Nom de l'oeuvre trouvé :
//           <input name="name" type="text" defaultValue={defaultValue.name} />
//         </label>
//         <label>
//           Adresse de l'oeuvre (approximativement):
//           <input
//             name="address"
//             type="text"
//             defaultValue={defaultValue.address}
//           />
//           <Geolocalisation />
//         </label>
//         <label>
//           Image de l'oeuvre :
//           <input name="image" type="file" />
//         </label>
//         <label>
//           Type de Street Art :
//           <input
//             name="type_of_art"
//             type="text"
//             defaultValue={defaultValue.type_of_art}
//           />
//         </label>
//         <label>
//           Auteur de la photo :
//           <input
//             name="picture_credit"
//             type="text"
//             defaultValue={defaultValue.picture_credit}
//           />
//         </label>
//         <button type="submit" defaultValue="Ajout">
//           {children}
//         </button>
//       </form>
//     </section>
//   );
// }

// export default AddNewArtwork;
