import type { RequestHandler } from "express";

// Import access to data
import articleRepository from "./artworkRepository";

// The B of BREAD - Browse (Read All) operation
// const browse: RequestHandler = async (req, res, next) => {
//   try {
//     // Fetch all items
//     const artworks = await articleRepository.readAll();

//     let coordinate = [];
//     let newArtworks = [];
//     let maintab = [];
//     let index = 0;

//     while (Object.keys(artworks)[index]) {
//       coordinate = Object.entries(artworks[index]);

//       console.info(coordinate);
//       newArtworks.push(coordinate[6][1], coordinate[7][1]);
//       console.info(newArtworks);
//       maintab.push(newArtworks);
//       console.info(maintab);
//       newArtworks = [];

//       //console.info(coordinate);
//       index++;
//     }

//     maintab = Object.assign({}, maintab);
//     console.info(maintab);

//     //coordinate.push(art.latitude, art.longitude);

//     //newArtworks.push(Object.entries(art));
//     /*
//       newArtworks.push(
//         art.id,
//         art.name,
//         art.address,
//         art.image,
//         art.picture_date,
//         art.type_of_art,
//         coordinate,
//         art.picture_credit,
//       );
//       */

//     // const newobject = artworks.map((art) => {
//     //   coordinate.push(art.latitude, art.longitude);
//     // });
//     //console.log(newArtworks);

//     //console.log(artworks);

//     res.json(artworks);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };
const browse: RequestHandler = async (req, res, next) => {
  try {
    const artworks = await articleRepository.readAll();
    const newArtworks = [];
    let newEnsemble = {};
    let coordinate = [];
    let i = 0;
    while (Object.keys(artworks)[i]) {
      coordinate.push(artworks[i].latitude, artworks[i].longitude);
      newEnsemble = {
        id: artworks[i].id,
        name: artworks[i].name,
        address: artworks[i].address,
        image: artworks[i].image,
        picture_date: artworks[i].picture_date,
        type_of_art: artworks[i].type_of_art,
        coordinates: coordinate,
        picture_credit: artworks[i].picture_credit,
      };
      newArtworks.push(newEnsemble);
      newEnsemble = {};
      coordinate = [];
      i++;
    }
    console.info(newArtworks);
    res.json(newArtworks);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
// const read: RequestHandler = async (req, res, next) => {
//   try {
//     // Fetch a specific item based on the provided ID
//     const itemId = Number(req.params.id);
//     const item = await articleRepository.read(itemId);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (item == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(item);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// // The A of BREAD - Add (Create) operation
// const add: RequestHandler = async (req, res, next) => {
//   try {
//     // Extract the item data from the request body
//     const newItem = {
//       title: req.body.title,
//       user_id: req.body.user_id,
//     };

//     // Create the item
//     const insertId = await articleRepository.create(newItem);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted item
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

export default { browse };
