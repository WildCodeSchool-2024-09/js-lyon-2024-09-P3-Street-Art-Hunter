// import { Link } from "react-router-dom";
// import AddNewArtwork from "../../components/AddNewArtwork/AddNewArtwork";
// import "../../App.css";
// import "./NewArtwork.css";
// import Logo from "../../assets/images/cc_logo_spotless_mustard.png";

// interface artworkData {
//   name: string;
//   address: string;
//   image: string;
//   type_of_art: string;
//   latitude: string;
//   longitude: string;
//   picture_credit: string;
// }

// function NewArtwork() {
//   const NewArtwork = {
//     name: "",
//     address: "",
//     image: "",
//     type_of_art: "",
//     latitude: "",
//     longitude: "",
//     picture_credit: "",
//   };

//   const submitingArt = (artworkFormData: artworkData) => {
//     fetch(`${import.meta.env.VITE_API_URL}/api/artwork`, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: artworkFormData,
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   };

//   return (
//     <>
//       <Link to="/" className="link-logo">
//         <img src={Logo} alt="logoCC" className="narrow-logo" />
//       </Link>
//       <section className="add_artwork">
//         <article className="presentation_add">
//           <h1>Trésor trouvé !</h1>
//           <p>
//             La rue regorge de trésors et nous sommes toujours heureux de pouvoir
//             en recommander un de plus à notre communauté. Remplissez le
//             formulaire ci-dessous pour l'ajouter à notre répertoire et en faire
//             profiter tous les autres curieux.
//           </p>
//         </article>
//         <AddNewArtwork defaultValue={NewArtwork} submitingArt={submitingArt}>
//           Ajouter
//         </AddNewArtwork>
//         <p className="thankyou">Merci pour votre contribution.</p>
//       </section>
//     </>
//   );
// }

// export default NewArtwork;
