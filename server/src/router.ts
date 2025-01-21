import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import artworkActions from "./modules/artwork/artworkActions";
import nominatimActions from "./nominatimActions";

router.get("/api/artworks", artworkActions.browse);
router.get("/api/artworks/:id", artworkActions.read);
router.post("/api/artwork", artworkActions.add);
router.get("/api/geolocalisation", nominatimActions.geocode);

/* ************************************************************************* */

export default router;
