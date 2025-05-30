import { Router } from "express";
import { createNewsController, updateNewsController, getAllNewsController } from "../controllers/newsController.js";
import { validateNews, validateNewsUpdate } from "../middlewares/newsValidator.js";

const router = Router();


router.put("/:id", validateNewsUpdate, updateNewsController);
router.post("/", validateNews, createNewsController);
router.get("/", getAllNewsController);

export default router;
