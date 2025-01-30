import type { RequestHandler } from "express";

// Import access to data
import artistRepository from "./artistRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newArtist = String(req.body.artist_name);

    if (newArtist == null) {
      req.body.id_artist = 1;
      next();
    }

    const insertArtist = await artistRepository.create(newArtist);

    if (insertArtist !== null) {
      req.body.id_artist = insertArtist;
      next();
    } else {
      res.status(404);
    }
  } catch (err) {
    next(err);
  }
};

export default { add };
