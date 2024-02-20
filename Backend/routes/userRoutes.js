import express from "express";

import protectRoute from "../middleware/protectRoute.js";
import { getuserForSidebar, getMe } from "../controllers/getuserForSidebar.js";

const router = express.Router();

router.get("/", protectRoute, getuserForSidebar);

router.get("/users/me", protectRoute, getMe);

export default router;
