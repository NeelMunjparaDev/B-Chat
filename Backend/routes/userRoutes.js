import express from "express";

import protectRoute from "../middleware/protectRoute.js";
import getuserForSidebar from "../controllers/getuserForSidebar.js";

const router = express.Router();

router.get("/", protectRoute, getuserForSidebar);

export default router;
