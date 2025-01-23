import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import artworkActions from "./modules/artwork/artworkActions";
import nominatimActions from "./nominatimActions";

router.get("/api/artworks", artworkActions.browse);
router.get("/api/artwork/:id", artworkActions.read);
router.post("/api/artwork", artworkActions.add);
router.get("/api/geolocalisation", nominatimActions.geocode);
// Define auth-related routes
import authActions from "./modules/auth/authActions";

router.post("/api/login", authActions.login);
// Define user-related routes
import userActions from "./modules/user/userActions";

router.post("/api/users/", userActions.add);
router.use(userActions.validate);
router.get("/api/users/:id", userActions.read);

/* ************************************************************************* */

export default router;
