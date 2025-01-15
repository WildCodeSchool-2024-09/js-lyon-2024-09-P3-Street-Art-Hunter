import type { RequestHandler } from "express";

// Import access to data
import articleRepository from "./artworkRepository";

// The B of BREAD - Browse (Read All) operation
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
    res.json(newArtworks);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const artworkId = Number(req.params.id);
    const artwork = await articleRepository.read(artworkId);
    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.json(artwork);
    }
  } catch (err) {
    next(err);
  }
};

// // The A of BREAD - Add (Create) operation
// const add: RequestHandler = async (req, res, next) => {
//   try {
//   } catch (err) {
//     next(err);
//   }
// };

export default { browse, read };
