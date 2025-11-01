import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';

import { createSong } from "../controller/admin.controller.js";
import { deleteSong } from "../controller/admin.controller.js";
import { createAlbum } from "../controller/admin.controller.js";
import { deleteAlbum } from "../controller/admin.controller.js";
import { checkAdmin } from "../controller/admin.controller.js";

const router = Router();

router.get("/check", protectRoute, requireAdmin, checkAdmin);

router.post("/songs", protectRoute, requireAdmin, createSong);
router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong);

router.post("/albums", protectRoute, requireAdmin, createAlbum);
router.delete("/albums/:id", protectRoute, requireAdmin, deleteAlbum);


export default router;