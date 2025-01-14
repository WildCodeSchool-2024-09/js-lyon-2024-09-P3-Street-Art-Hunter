import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import artworkActions from "./modules/item/artwork/artworkActions";

router.get("/api/artworks", artworkActions.browse);
router.get("/api/artworks/:id", artworkActions.read);

/* ************************************************************************* */

export default router;
