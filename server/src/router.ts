import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import artistsActions from "./modules/artists/artistsActions";
import artworkActions from "./modules/artwork/artworkActions";
import authActions from "./modules/auth/authActions";
import userActions from "./modules/user/userActions";
import nominatimActions from "./nominatimActions";

router.get("/api/geolocalisation", nominatimActions.geocode);

router.get("/api/artworks", artworkActions.browse);
router.get("/api/artwork/:id", artworkActions.read);
router.post(
  "/api/artwork",
  authActions.verifyToken,
  artistsActions.add,
  artworkActions.add,
);

router.post("/api/login", authActions.login);
router.post("/api/users", authActions.hashPassword, userActions.add);
router.get("/api/user", authActions.verifyToken, userActions.read);
router.put("/api/user", authActions.verifyToken, userActions.edit);

/* ************************************************************************* */

export default router;
