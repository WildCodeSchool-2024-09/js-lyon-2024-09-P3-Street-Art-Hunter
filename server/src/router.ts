import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import artworkActions from "./modules/artwork/artworkActions";
import authActions from "./modules/auth/authActions";
import userActions from "./modules/user/userActions";
import nominatimActions from "./nominatimActions";

router.get("/api/geolocalisation", nominatimActions.geocode);

router.get("/api/artworks", artworkActions.browse);
router.get("/api/artwork/:id", artworkActions.read);

// Define user-related routes

router.post("/api/login", authActions.login);
router.post("/api/users", authActions.hashPassword, userActions.add);
router.get("/api/users/:id", userActions.read);

router.put("/api/users/:id", authActions.verifyToken, userActions.edit);
router.post("/api/artwork", authActions.verifyToken, artworkActions.add);

/* ************************************************************************* */

export default router;
