import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import artworkActions from "./modules/artwork/artworkActions";
import authActions from "./modules/auth/authActions";
import nominatimActions from "./nominatimActions";

router.get("/api/artworks", artworkActions.browse);
router.get("/api/artwork/:id", artworkActions.read);
router.post("/api/artwork", artworkActions.add);

router.get("/api/geolocalisation", nominatimActions.geocode);

router.post("/api/login", authActions.login);
// Define user-related routes
import userActions from "./modules/user/userActions";

router.get("/api/users/:id", userActions.read);
router.post("/api/users", authActions.hashPassword, userActions.add);

/* ************************************************************************* */

export default router;
